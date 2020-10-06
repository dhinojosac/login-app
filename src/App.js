import React, {useState} from 'react';
import './App.css';
import CreatePost from './post/CreatePost';
import PostList from './post/PostList';
import UserBar from './user/UserBar';


const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]



export default function App(){
  const [ user, setUser ] = useState('')
  const [ posts, setPosts ] = useState(defaultPosts)

  return (
      <div style={{padding:8}}>
        
        <UserBar user={user} setUser={setUser}/>

        <br />
        <hr />
        {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
        {user && <PostList posts={posts}/>}

      </div>
  )
}
