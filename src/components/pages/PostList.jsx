import React, { useState, useEffect } from 'react';
import { supabase } from '/src/client';
import Post from './Post';

export default function PostList() {
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
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
