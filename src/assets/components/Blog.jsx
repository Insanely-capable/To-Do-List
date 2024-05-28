import { useState, useEffect } from 'react';
import './style.css';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(result => setPosts(result));
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div key={index} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;

    