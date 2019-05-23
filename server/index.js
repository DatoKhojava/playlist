import { ApolloServer, gql } from 'apollo-server-express'
import express from 'express'
import mongoose from 'mongoose'
import { typeDefs } from './schema/typeDefs'
import { resolvers } from './schema/resolvers'

const app = express();

mongoose.connect('mongodb+srv://root:6m7BnrXDz3rxDjzV@mussics-0ruuz.mongodb.net/test', {useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
  console.log("Connected to database");
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)