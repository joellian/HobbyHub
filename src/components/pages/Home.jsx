import React, { useState, useEffect } from 'react';
import { supabase } from '/src/client';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase.from('posts').select('*');
      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="home-container">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
