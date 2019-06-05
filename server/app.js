const express = require ('express'); 
const app = express(); 
const PORT = 3000; 
const graphqlHTTP = require('express-graphql');






app.listen(PORT, () => {
    console.log('server is listening on port '+PORT);
})