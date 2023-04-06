import React from 'react'
import { useState } from "react";

export function SaveForm() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/university", {
        method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          id: id,
          name: name,
          address: address,
          email: email,
        }),
      });
      if (res.status === 201) {
        setId("");
        setName("");
        setAddress("");
        setEmail("");
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="SaveForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          placeholder="ID"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={address}
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}