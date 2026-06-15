import React from 'react';
import Post from './components/post.jsx'; 
import './App.css'; 

import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image.jpeg";   
import image3 from "./assets/image3.jpeg";

function App() {
  return (
    <div className="posts">
     <h1>Mini Image Feed</h1>
                       
     <Post image={image1} name="nandu" />
    <Post image={image2} name="nandini" />
   <Post image={image3} name="me" />
</div>
 );
   }
 export default App;