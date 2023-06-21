import Router from "next/router";
import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    Router.push("/");
  };

  const handleLogout = async (e: any) => {
    e.preventDefault();

    await fetch("http://localhost:3001/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    Router.push("/");
  };

  return (
    <div>
      <h1>Iniciar Session</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuario"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      <form onSubmit={handleLogout}>
        <button type="submit">Cerrar sesión</button>
      </form>
    </div>
  );
};

export default LoginPage;
