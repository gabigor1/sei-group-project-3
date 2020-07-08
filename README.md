# sei-group-project-3

General Assembly Project 3 : - Spot-me

## https://film-space-django.herokuapp.com/

## Goal: 
Team project to design and create a MERN app using MongoDB, Mongoose and third-parties APIs

Timeframe: 7 days

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [View](#view)
- [Win](#win)
- [Challenges](#challenges)
- [Lesson](#lesson)

## Overview

Spot-me is a full stack social media app that uses third-party APIs (Mapbox and Google Places) to build a plataform to encourage users to find fitness facilities in their area, follow users, create groups and posts. 

Our app required data from Google Places, fitness facilities reviews and data, and Mapbox to produce a map of the zone, where you can check the near facility.

This group project was a good experience to learn about teamwork, how to organize the task and how to manage time. We divided the tasks between the members of the group, I worked styling the app using SASS and Bulma, also I worked in the frontend development, profile and newsfeed development

## Technologies

### BackEnd

- MongoDB
- Mongoose
- JWT Auth
- Node.js
- Express

### FrontEnd

- React.js
- Bulma
- Mapbox
- Google API
- Axios

## View

### Profile page

![Profile](assets/profile.png)

### Post and likes

![Post](assets/post.png)

### Chat

![Chat](assets/chat.png)

### Map

![Map](assets/map.png)

### Info, images and reviews of a gym

![Fitnessinfo](assets/fitnessinfo.png)

## Win

Making the NewsFeeds was a big win for me, I managed to retrieve the data from the backend to render it correctly in the profile page. I found that if the r

```
class NewsFeedsCard extends React.Component {

  render () {
    const { post, like, comment ,change, commentDelete, 
    deletePost, i , setIndex, indexState, currentUser, value } = this.props
    // const post = this.props.post? this.props.post : ''
    return (
      <>
      <div className="wrap-center">
        <div className="feeds-container">

          <div className="feeds-header">
            <div className='feeds-user-info'>
              <img 
              src={post.owner? post.owner.image : defaultImage } 
              alt="test" 
              />
              <h4 className="feeds-header-title">{post.owner.username}</h4> 
            </div>
            
            <div 
              className={currentUser.id === post.owner.id ? 
                'display-block' : 'display-none'}
              onClick={()=>{
                deletePost(`${post._id}`)}}>
                  <p className='delete-text'>Delete </p>
              </div>
          </div>

          <div className="feeds-content">
            <h1>{post.content}</h1>
          </div>
          <div className="feeds-image">
            <figure>
              {post.image ? <img src={post.image} alt="test"/> : null}
            </figure>
          </div>
          <div 
            onMouseEnter={()=>{
              setIndex(`${i}`)
            }} className="feeds-likes"
            onMouseLeave={()=>{
              setIndex(null)
            }}>
            <img 
              className="likes" 
              src={require('../../assets/muscle.png')} 
              alt="logo"/>
                
            <div className={`likes-hover ${i.toString() === indexState ? 'display-block' : 'display-none'}`}>  
              {post.likes? post.likes.map((like,i) => {
                return <p key={i}>{`${like.firstName}`}{`${like.lastName}`} liked this</p>
              }) : null}
            </div>
            <p><span>{post.likes.length > 0? post.likes.length : 0 }</span> likes</p>
          </div>
          <div className="feeds-buttons">
            <div className="field center-items">
              <div className="control center-items">
                <button className="feed-button" onClick={()=>{
                  like(`${post.owner.id}`,`${post._id}`)
                }}> 
                  <img 
                    src={require('../../assets/fitness.png')} alt="logo" width="20px"/>
                      Like
                </button>
                <button className="feed-button"> 
                  <img src={require('../../assets/interface (1).png')} alt="logo" width="20px"/>
                    Comment
                </button>
              </div>
            </div>
          </div>
              
          {post.comments ? post.comments.map(comment =>{
            return <div key={comment._id} className='post-comments-container'>
              <div className='post-comment-field'>
                <img src={comment.user.image ? `${comment.user.image}` : defaultImage } 
                  alt='commenters-img'/>
                <div className='commenters-comment'>
                  <p>{comment.user.username}</p>
                  <p>{comment.content}</p>
                  <div 
                    className={currentUser.id === post.owner.id  ? 'display-block' : 'display-none' ||
                  currentUser.id === post.comment.user.id? 'display-block' : 'display-none' }
                    onClick={()=>commentDelete(`${post._id}`,`${post.owner._id}`,`${comment._id}`)}>
                    <p className='delete-text'>delete</p></div>
                </div>
              </div>
            </div>
          }) : null }
          <div className="feeds-comments">
            <figure className="picture">
              <img 
                className="profile-picture" 
                src={currentUser.image? currentUser.image : defaultImage}
                alt="logo" 
              />
            </figure>
            <div className="field">
              <form onSubmit={e=>{
                e.preventDefault(); comment(`${post.owner._id}` , `${post._id}`)
              }}>
                <textarea
                  className="textarea"
                  name="content"
                  placeholder="Write a comment..."
                  onChange={change}
                  value={value}/>
                <button> Send Comment </button> 
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}


export default NewsFeedsCard
```

## Challenges

One of the challenges we faced was communicated properly, so many times me or other person of the group change something but didn't say it, making us losing time. Other challenge was to make backend relationships and populate them. We fix the backend problems but it cost us a lot of time.

## Lesson

A better understanding on how the BackEnd and FrontEnd works togethers and how works the props and and whether to put the state in the parent component save a lot of time. Work in team communication, we often commited so mistakes and we didn't talk about how our work was progressing.