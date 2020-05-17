const User = require('../models/user')


// post request - /profile/:userId/post
// require body = {
// content: String
// }

async function createNewPost(req,res,next) {
  // console.log('post submitted')
  // console.log(req.currentUser)
  // console.log(req.params.userId)
  
  try {
    const user = await User.findById(req.params.userId)
    console.log(user)
    if (!user.equals(req.currentUser._id)){
      throw new Error('Not authorized to do this')
    }
    req.body.owner = req.currentUser
    user.posts.push(req.body)
    await user.save()
    res.status(201).json('post created successfully')

  } catch (err){
    next(err)
  }
}

// ----- DELETE REQUEST TO REMOVE POST ---------
// http delete request - /profile/:userId/post/:postId
// no body required
// owner token required to delete

async function deletePost(req,res,next) {
  try {
    const user = await User.findById(req.params.userId)
    const postToDelete = user.posts.id(req.params.postId)
    if (!user || !postToDelete) {
      throw new Error('Not Found')
    }
    if (!postToDelete.owner.equals(req.currentUser._id)){
      throw new Error('Not authorized to do this')
    }
    await postToDelete.remove()
    await user.save()
    res.status(201).json('post deleted successfully')

  } catch (err){
    next(err)
  }
}

// ------- LIKE A POST CONTROLLER ------------
// put request - /profile/:userId/post/:postId
// no body required
// valid token required to delete

async function toggleLike(req,res,next){
  try {
    const owner = await User.findById(req.params.userId)
    const post = owner.posts.id(req.params.postId)
    if (!owner || !post) {
      throw new Error('Not Found')
    }
    post.likes.push(req.currentUser)
    await owner.save()
    res.status(201).json('post liked successfully')

  } catch (err){
    next(err)
  }
  
}

module.exports = {
  newPost: createNewPost,
  deletePost: deletePost,
  addLike: toggleLike
}


