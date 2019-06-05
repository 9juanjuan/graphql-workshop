const express = require ('express'); 
const app = express(); 
const PORT = 3000; 
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');


app.use('/graphql', graphqlHTTP({
    schema
}));






app.listen(PORT, () => {
    console.log('server is listening on port '+PORT);
})