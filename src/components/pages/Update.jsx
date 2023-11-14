import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '/src/client';

function Update({ postId }) {
  const [post, setPost] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newImage, setNewImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase.from('posts').select('*').eq('id', postId);
      if (error) {
        console.error('Error fetching the post:', error);
      } else {
        setPost(data[0]);
        setNewTitle(data[0].title);
        setNewContent(data[0].content);
        setNewImage(data[0].image);
      }
    }

    fetchPost();
  }, [postId]);

  async function handleUpdate(e) {
    e.preventDefault();
    const { data, error } = await supabase.from('posts').update({
      title: newTitle,
      content: newContent,
      image: newImage,
    }).match({ id: postId });

    if (error) {
      console.error('Error updating the post:', error);
    } else {
      navigate(`/post/${postId}`);
    }
  }

  return (
    <div>
      {post ? (
        <div>
          <h2>Update Post</h2>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <textarea
              placeholder="Content"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
            />
            <button type="submit">Update Post</button>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Update;
