const Post= {
    // author: async (parent, args, {prisma}, info)=>{
    //     return await prisma.user.findUnique({
    //         where: {id: parent.authorId}
    //     }).catch((e)=>{
    //         return Promise.reject(new Error('Erroe in fetching user'))
    //     })
    // },
    // comments: async (parent, args, {prisma}, info)=>{
    //     return await prisma.post.findUnique({
    //         where:{id: parent.id}
    //     }).comments().catch((e)=>{
    //         return Promise.reject(new Error('Erroe in fetching comments of post'))
    //     })
    // }
}

module.exports = Post