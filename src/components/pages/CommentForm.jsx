import React, { useState } from 'react';
import { supabase } from '/src/client';

function CommentForm({ postId }) {
  const [content, setContent] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const { data, error } = await supabase.from('comments').insert([
      {
        postId,
        content,
      },
    ]);

    if (error) {
      console.error('Error creating a new comment:', error);
    } else {
      setContent('');
    }
  }

  return (
    <div>
      <h3>Leave a Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
}

export default CommentForm;
