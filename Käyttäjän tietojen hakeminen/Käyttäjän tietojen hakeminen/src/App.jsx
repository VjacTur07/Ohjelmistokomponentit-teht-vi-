import React, { useState, useEffectEvent, useEffect } from "react";

function UserSearch() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId || userId < 1 || userId > 10) {
      setUser(null);
      return;
    }
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Palvelinvirhe");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Hae käyttäjä ID:llä (1-10)</h2>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
      />

      {loading && <p>Ladataan...</p>}
      {error && <p style={{ color: "red" }}>Virhe: {error}</p>}

      {user && !loading && (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Nimi:</strong> {user.name}
          </p>
          <p>
            <strong>Kaupunki:</strong> {user.address.city}
          </p>
        </div>
      )}
    </div>
  );
}
export default UserSearch;
