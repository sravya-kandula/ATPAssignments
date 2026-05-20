import React from "react";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "80vh",
        padding: "60px",
        background: "linear-gradient(to right, #f5f7fa, #d7f5c8)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left Content */}
      <div style={{ width: "50%" }}>
        <h1
          style={{
            fontSize: "50px",
            color: "#222",
            marginBottom: "20px",
          }}
        >
          Welcome to User Management System
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Easily manage your users with a modern and simple interface. Add
          users, view user details, and organize information efficiently in one
          place with a clean user experience.
        </p>

        <button
          style={{
            padding: "14px 28px",
            border: "none",
            backgroundColor: "#7ac943",
            color: "white",
            fontSize: "18px",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "0.3s",
          }}
        >
          Get Started
        </button>
      </div>

      {/* Right Image */}
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="User Management"
          style={{
            width: "420px",
          }}
        />
      </div>
    </div>
  );
}

export default Home;
