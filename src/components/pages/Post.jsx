import React, { useState, useEffect } from 'react';
import { supabase } from '/src/client';
import CommentForm from './CommentForm';

function Post({ postId }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [upvotes, setUpvotes] = useState(0);

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase.from('posts').select('*').eq('id', postId);
      if (error) {
        console.error('Error fetching the post:', error);
      } else {
        setPost(data[0]);
        setUpvotes(data[0].upvotes);
      }
    }

    async function fetchComments() {
      const { data, error } = await supabase.from('comments').select('*').eq('postId', postId);
      if (error) {
        console.error('Error fetching comments:', error);
      } else {
        setComments(data);
      }
    }

    fetchPost();
    fetchComments();
  }, [postId]);

  async function handleUpvote() {
    const { data, error } = await supabase.from('posts').update({ upvotes: upvotes + 1 }).match({ id: postId });
    if (error) {
      console.error('Error upvoting the post:', error);
    } else {
      setUpvotes(upvotes + 1);
    }
  }

  return (
    <div className="post-container">
      {post ? (
        <div className="post-content">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={handleUpvote} className="upvote-button">Upvote ({upvotes})</button>
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p>{comment.content}</p>
            </div>
          ))}
          <CommentForm postId={postId} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Post;
