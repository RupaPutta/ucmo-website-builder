import React from 'react'
import { useState } from "react";

export function DeleteForm() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/university", {
        method: "DELETE",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      if (res.status === 200) {
        setId("");
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="DeleteForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          placeholder="ID"
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}