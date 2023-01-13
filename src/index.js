const { createYoga, createSchema, createPubSub } = require('graphql-yoga')
const fs = require('fs');
const path = require('path')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Post = require('./resolvers/Post')
const User = require('./resolvers/User')
const Comment = require('./resolvers/Comment')
const Subscription = require('./resolvers/Subscription')
const { PrismaClient } = require('@prisma/client')
const express = require('express')

const app = express()


const prisma = new PrismaClient()

const pubsub = createPubSub()

const schema = createSchema({
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

const yoga = createYoga({ schema, graphqlEndpoint:"/",
    context: (request)=>{
        
        return {
        prisma,
        pubsub,
        request
    }}
})

app.use("/",yoga)

app.listen(4000,()=> {
    console.log('the server is up 4000')
})