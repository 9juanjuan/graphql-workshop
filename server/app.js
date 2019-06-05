const express = require ('express'); 
const app = express(); 
const PORT = 3000; 
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://antonio:qKh1txfUeInZc4MU@antonio-h89qi.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
mongoose.connection.once('open', () =>{
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));






app.listen(PORT, () => {
    console.log('server is listening on port '+PORT);
})