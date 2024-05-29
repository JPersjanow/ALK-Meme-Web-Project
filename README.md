# "Best" Meme Application Ever

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Contributors

[Jakub Persjanow](https://github.com/JPersjanow)
[Michał Kostrzewa](https://github.com/Kostek095)

## Setting up and running the application

Project comes with a backend mockup using json-server, main application is React based.

### Install dependencies

run `npm install` from inside the project folder

### Start backend mockup

run `start:db` npm script or execute command `json-server --watch src/constants/memdatabase.json`

### Start the app

run `start` npm script or execute command `react-scripts start`

## API endpoints configuration

If you run into any issues with incorrect ulrs/endpoints:

1. `start:db` needs to be run first for port to be matching with `constants/endpoints` as the default will be _3000_
2. if you need to change the port, you can change `port` variable in `constants/endpoints`, this will be used throughout the application
3. `start` then will ask whether the application should be hosted on other ports than _3000_
