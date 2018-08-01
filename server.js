const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Jason', lastName: 'Stickel'},
        {id: 2, firstName: 'John', lastName: 'Doe'},
        {id: 3, firstName: 'Jane', lastName: 'Doe'},
    ];

    res.json(customers);
});

const PORT = 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));


// package.json

// "scripts": {
//     "client-install": "cd client && npm install",   -- don't have to cd into client folder to npm install react dependencies
//     "start": "node server.js",
//     "server": "nodemon server.js",
//     "client": "cd client && npm start",
//     "dev": "concurrently \"npm run server\" \"npm run client\""
//   }

// or 

// "client": "npm start --prefix client"  - same as client above

// now just have to run 
// npm run dev