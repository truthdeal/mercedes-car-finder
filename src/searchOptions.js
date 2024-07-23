const options = {
    method: 'POST',
    url: 'https://cdn.sip.mercedes-benz.com/api/vs/v3/UCui/DE/overview',
    headers: {
        'accept': 'application/vnd.basesip.fom+json',
        'content-type': 'application/json;charset=UTF-8',
        'origin': 'https://www.mercedes-benz.de',
        'referer': 'https://www.mercedes-benz.de/',
    },
    data: {
        vehicleSearchRequest: {
            searchInfo: {
                paging: {
                    pageIndex: 0,
                    quantity: 12
                },
                searchterm: {
                    findCompleteTermOnly: true
                },
                sort: [
                    {
                        field: "offerPriceGross",
                        order: "ASC"
                    }
                ]
            },
            facets: ["salesClass", "bodyGroup", "firstRegistrationDate", "salesProgram", "genericStr0", "fuelType", "line"],
            criteria: {
                salesClass: [
                    {
                        codes: ["CLA"],
                        text: "CLA"
                    }
                ],
                bodyGroup: [
                    {
                        codes: ["3"],
                        text: "Coupé"
                    }
                ],
                firstRegistrationDate: {
                    min: 20190101,
                    max: 20240522
                },
                salesProgram: [
                    {
                        codes: ["CPO"],
                        text: "Junge Sterne"
                    }
                ],
                genericStr0: [
                    {
                        codes: ["CLA 220"],
                        text: "CLA 220"
                    },
                    {
                        codes: ["CLA 250"],
                        text: "CLA 250"
                    }
                ],
                fuelType: [
                    {
                        codes: ["HB"],
                        text: "Hybrid (Benzin)"
                    },
                    {
                        codes: ["B"],
                        text: "Benzin"
                    }
                ],
                line: [
                    {
                        codes: ["950"],
                        text: "AMG Sport"
                    }
                ],
                paintGroup: [
                    {
                        codes: [
                            "SILV"
                        ],
                        text: "silber"
                    },
                    {
                        codes: [
                            "WHIT"
                        ],
                        text: "weiß"
                    },
                    {
                        codes: [
                            "BLAC"
                        ],
                        text: "schwarz"
                    },
                    {
                        codes: [
                            "GREY"
                        ],
                        text: "grau"
                    }
                ],
            },
            context: {
                processId: "UCui",
                locale: "de_DE",
                outletIds: [],
                uiId: "main"
            }
        }
    }
};
exports.options = options;
