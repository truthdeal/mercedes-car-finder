# Mercedes Car Finder

This project is a Mercedes car finder application that searches for cars based on specific criteria and sends notifications via Telegram.

## Features

- **Search Criteria**: Define must-have and nice-to-have features for the cars.
- **Telegram Notifications**: Get notified on Telegram when a car matching the criteria is found.
- **Automated Search**: The application periodically searches for new cars and evaluates them based on the defined criteria.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/truthdeal/mercedes-car-finder.git
    cd mercedes-car-finder
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your Telegram bot token and chat ID:
    ```sh
    TELEGRAM_BOT_TOKEN=your_telegram_bot_token
    TELEGRAM_CHAT_ID=your_telegram_chat_id
    ```

## Usage

To start the application, run:    ```sh
    node src/search.js
    ```

The application will start searching for cars based on the criteria defined in `src/wishCarConfig.js` and send notifications to the specified Telegram chat.

## Configuration

### Search Options

The search options are defined in `src/searchOptions.js`. You can customize the search criteria, such as the car model, body type, registration date, and more.

Example `src/searchOptions.js`:
```javascript
const searchOptions = {
    model: 'Mercedes-Benz',
    bodyType: 'SUV',
    registrationDate: {
        from: '2018-01-01',
        to: '2023-01-01'
    },
    // ... other search options ...
};
```

### Wish Car Configuration

The desired car features are defined in `src/wishCarConfig.js`. You can specify must-have features and nice-to-have features with their respective points.

Example `src/wishCarConfig.js`:
```javascript
const wishCarConfig = {
    mustHave: {
        'Automatic Transmission': 10,
        'Leather Seats': 8,
        // ... other must-have features ...
    },
    niceToHave: {
        'Sunroof': 5,
        'Heated Seats': 3,
        // ... other nice-to-have features ...
    }
};
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Dependencies

- axios: https://www.npmjs.com/package/axios
- dotenv: https://www.npmjs.com/package/dotenv
- node-telegram-bot-api: https://www.npmjs.com/package/node-telegram-bot-api

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Acknowledgements

- Thanks to the developers of the libraries used in this project.
- Special thanks to Mercedes-Benz for providing the API.
```
