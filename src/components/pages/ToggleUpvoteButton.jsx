import React from 'react';
import { supabase } from '/src/client';

export default function ToggleUpvoteButton({ post }) {
  async function handleUpvote() {
    const { data, error } = await supabase.from('posts').update({ upvotes: post.upvotes + 1 }).match({ id: post.id });
    if (error) {
      console.error('Error upvoting the post:', error);
    } else {
      post.upvotes += 1;
    }
  }

  return (
    <button
      className="btn btn-info btn-sm"
      onClick={handleUpvote}
    >Upvote ({post.upvotes})</button>
  );
}
