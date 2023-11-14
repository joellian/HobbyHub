import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '/src/client';

function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const { data, error } = await supabase.from('posts').insert([
      {
        title,
        content,
        image,
      },
    ]);

    if (error) {
      console.error('Error creating a new post:', error);
    } else {
      navigate(`/post/${data[0].id}`);
    }
  }

  return (
    <div className="create-container">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit} className="create-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="create-input"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="create-textarea"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="create-input"
        />
        <button type="submit" className="create-button">Create Post</button>
      </form>
    </div>
  );
}

export default Create;
