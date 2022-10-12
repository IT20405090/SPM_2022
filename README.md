# SPM_2022
A web application using MERN technologies for the 3rd year 2nd semester project at SLIIT

## A word about the Application
- This application is built for a fuel station, in order to manage the daily tasks of the station. 
- According to the scenario, application is used by three users knowns as **Admin**, **Customer** and **Employee**
- Admin can create a employee profiles and then send the creadential details to the Employee. Users can login to the system using the registered user credentials and they will be validated.
- Employess can manage their tasks using the application also the customers can view all the necessary details. 
- Without maintaining physical books and records, this application makes it eaiser for any user to manage their related tasks.


## Programming languages
- MERN Stack
- frontend- React js
- backend- Express js , Node js
- DataBAse - Mongo DB

## How to run the application
You can clone the repository to your computer and then give the command
```
npm install
```
# further details, I'll mention all the dependancies with versions i have used for the application
-Backend
```
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.1",
    "cloudinary": "^1.30.0",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.2",
    "express-validator": "^6.14.0",
    "fs": "^0.0.1-security",
    "http": "^0.0.1-security",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.13.14",
    "multer": "^1.4.4",
    "serve-favicon": "^2.5.0",
    "socket-io": "^1.0.0",
    "socket.io": "^4.5.1",
    "test": "^0.6.0",
    "uuid": "^8.3.2",
    "nodemon": "^2.0.15"
  },
  "devDependencies": {
    "concurrently": "^6.5.1",
    "nodemon": "^2.0.15"
  }
```
-Frontend
```
"keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@emailjs/browser": "^3.6.2",
    "axios": "^0.21.4",
    "firebase": "^9.8.1",
    "jspdf": "^2.5.1",
    "jspdf-autotable": "^3.5.25",
    "moment": "^2.29.3",
    "parcel": "^2.5.0",
    "prop-types": "^15.8.1",
    "react": "^17.0.2",
    "react-data-table-component": "^7.5.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-redux": "^7.2.6",
    "react-router-dom": "^6.3.0",
    "react-scripts": "^4.0.3",
    "react-scroll-to-bottom": "^4.2.0",
    "react-select": "^5.3.2",
    "reactstrap": "^9.0.2",
    "redux": "^4.1.2",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.4.1",
    "socket.io-client": "^4.5.1",
    "sweetalert2": "^11.4.16",
    "uuid": "^3.4.0"
```
- Once installations are done for the front end and backed folders separatly, you can give
```
npm start
```
command to both directories.
- In the front end terminal , a link will desplay to the application.
- "ctrl + click " on that link will direct to the web application.


Thats all, i hope this description will be helpfull for you to understand the application.
