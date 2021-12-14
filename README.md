# Exploring the monolith

The purpose of this application is to demonstrate how a monolithic application works. Notice that when your HTTP
client (your browser, curl or Postman) makes a request to this application, the response is HTML:
the HTML is generated on the server side and sent over the wire to your client.

## Instructions for setting up the application
Ensure you have installed Node.js on your computer. Then open terminal and go to the directory you would like to put this application.

```bash
# clone the repository
npx degit hajusrakendused/ylesanne1 ylesanne1

# go to the project folder
cd ylesanne1

# install dependencies
npm i

# launch the application
npm start
```