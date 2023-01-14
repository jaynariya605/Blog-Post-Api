const { createYoga, createSchema, createPubSub } = require('graphql-yoga')
const fs = require('fs');
const path = require('path')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Post = require('./resolvers/Post')
const User = require('./resolvers/User')
const Comment = require('./resolvers/Comment')
const Subscription = require('./resolvers/Subscription')
const { PrismaClient } = require('./generated/client')
// const express = require('express')
const  { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
// const app = express()
const  { startStandaloneServer  } = require('@apollo/server/standalone');

const prisma = new PrismaClient()

const pubsub = createPubSub()

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname,'schema.graphql'),
        'utf8'
    ),
    resolvers: {
        Query ,
        Mutation ,
        Subscription,
        Post ,
        User ,
        Comment 
        
    }
    
})

startStandaloneServer(server, {
    context: async ({ req }) => ({ 
        request:req,
        pubsub,
        prisma
    }),
    listen: { port: 4000 },
  })



// app.use("/",yoga)

// app.listen(4000,()=> {
//     console.log('the server is up 4000')
// })