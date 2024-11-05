// Button.js
import React from "react";

export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      style={{
        marginRight: "5px",
        cursor: "pointer",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        padding: "5px",
        borderRadius: "4px",
      }}
    >
      {children}
    </button>
  );
};
