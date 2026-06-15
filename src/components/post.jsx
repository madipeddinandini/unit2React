import React, { useState } from 'react';

const Post = (props) => {
  
  const [likes, setLikes] = useState(0);

  
  const handleLikes = () => {
    setLikes(likes + 1); 
    console.log(likes + 1);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '12px', borderRadius: '8px', maxWidth: '300px' }}>
      <img 
        src={props.image} 
        alt={props.name} 
        style={{ width: '100%', height: 'auto', borderRadius: '4px' }} 
      />
      
      <p><strong>{props.name}</strong></p>
      
      <button onClick={handleLikes}>
        likes {likes}
      </button>
    </div>
  );
};

export default Post;