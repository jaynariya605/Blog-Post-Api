const { GraphQLError } = require('graphql')
const jwt = require('jsonwebtoken')

const getUserId = (request, requireAuth = true) => {
    const header =  request.request.headers.get('authorization') 
      
    if (header) {
        const token = header.replace('Bearer ','')
        const decoded = jwt.verify(token, 'thisismysecrate')

        return decoded.userId
    }
    if(requireAuth){
        throw new GraphQLError('Authentication required')
    }

}

module.exports = {getUserId}