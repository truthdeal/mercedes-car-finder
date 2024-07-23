const axios = require('axios');
const { options } = require('./searchOptions.js');
const {wishCarConfig} = require('./wishCarConfig.js');


const carScoreMinimum = 8;
const searchPageCount = 10;
let checkInterval = 1; // 1 hour search interval
checkInterval = checkInterval * 60 * 60 * 1000; // Convert to milliseconds


let vehicleList = [];

async function fetchSearchResults() {
  const promises = [];

  for (let i = 0; i < searchPageCount; i++) {
    let optionToPush = JSON.parse(JSON.stringify(options)); 
    optionToPush.data.vehicleSearchRequest.searchInfo.paging.pageIndex = i;
    promises.push(axios.request(optionToPush));
  }

  const results = await Promise.all(promises);
  return results.flatMap(result => result.data.results[0].fomVehicles);
}

function evaluateVehicle(vehicle) {
  const price = parseFloat(vehicle.genericFields.genericInt1);
  const hasPreviousDamage = vehicle.condition.hasPreviousDamage.code === false;

  if (price > wishCarConfig.must.priceUnder || !hasPreviousDamage) {
    return false;
  }

  let niceToHavePoints = 0;
  const equipmentCodes = vehicle.vehicleConfiguration.equipments.map(eq => eq.code);

  for (const [code, points] of Object.entries(wishCarConfig.niceToHaveCarPoints)) {
    if (equipmentCodes.includes(code)) {
      niceToHavePoints += points;
    }
  }

  return niceToHavePoints >= carScoreMinimum;
}

async function checkForNewVehicles() {
  try {
    const newVehicleList = await fetchSearchResults();

    const newVehicles = newVehicleList.filter(
      newVehicle => !vehicleList.some(existingVehicle => existingVehicle.id === newVehicle.id)
    );

    const qualifiedNewVehicles = newVehicles.filter(evaluateVehicle);

    if (qualifiedNewVehicles.length > 0) {
      console.log('Found new fitted cars:', qualifiedNewVehicles.length);
      qualifiedNewVehicles.forEach(vehicle => {
        console.log(`Vehicle: ${vehicle.vehicleConfiguration.salesDescription}`);
        console.log(`Year: ${vehicle.vehicleConfiguration.modelYear}`);
        console.log(`Km: ${vehicle.condition.mileage}`);
        console.log(`Price: ${vehicle.genericFields.genericInt1} €`);
        console.log('Link:', `https://www.mercedes-benz.de/passengercars/buy/used-car-search.html/u/gebrauchte-fahrzeuge/d/fahrzeugdetails/?id=${vehicle.id}`);
        console.log('---');
      });
      vehicleList = [...vehicleList, ...qualifiedNewVehicles]; // Yeni araçları eski listeye ekle
    } else {
      console.log('There is no new car.');
    }
  } catch (error) {
    console.error('Error occured during filtering cars:', error);
  }
}

checkForNewVehicles();

setInterval(checkForNewVehicles, checkInterval);
