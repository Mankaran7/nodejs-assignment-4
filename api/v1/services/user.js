
const getUserById=async(userId)=>{
    const user=await fetch(`/user/${userId}`)
    return user
}
module.exports={getUserById}