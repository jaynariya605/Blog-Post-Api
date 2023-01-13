const { getUserId } = require('../utils/getUserId')
const { posts } = require('./Query')
const User = {
    email:(parent, args, {request}, info)=>{
        const userId = getUserId(request, false)
        if(userId && userId === parent.id){
            return parent.email
        } else {
            return null
        }
    },
    posts:  (parent, args, {prisma}, info)=>{
        return parent.posts.filter((post)=>post.published)
    }
}

module.exports = User