import React, { useState, useEffect } from "react";

function UserTask() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
    ])
      .then(async ([userRes, postsRes]) => {
        if (!userRes.ok || !postsRes.ok) throw new Error("Data fetch failed");

        const userData = await userRes.json();
        const postsData = await postsRes.json();

        setUser(userData);
        setPosts(postsData);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);

  return (
    <div className="task-card">
      <h1 style={{ textAlign: "center", color: "#5a7d66" }}>User Explorer</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <button
          className="nav-btn"
          disabled={userId <= 1 || loading}
          onClick={() => setUserId(userId - 1)}
        >
          Previous
        </button>

        <span
          style={{ fontSize: "1.1rem", fontWeight: "600", color: "#4a6352" }}
        >
          User ID: {userId}
        </span>

        <button
          className="nav-btn"
          disabled={userId >= 10 || loading}
          onClick={() => setUserId(userId + 1)}
        >
          Next
        </button>
      </div>

      {loading && (
        <p className="loading-text" style={{ textAlign: "center" }}>
          Loading data...
        </p>
      )}

      {error && (
        <p style={{ color: "#d9534f", textAlign: "center" }}>Error: {error}</p>
      )}

      {!loading && !error && user && (
        <div className="user-info-section">
          <h2>{user.name}</h2>
          <p>
            <strong>City:</strong> {user.address.city}
          </p>

          <h3
            style={{
              borderTop: "1px solid #e2eee6",
              paddingTop: "15px",
              marginTop: "15px",
            }}
          >
            First 10 Posts:
          </h3>
          <ul className="posts-list">
            {posts.slice(0, 10).map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserTask;
