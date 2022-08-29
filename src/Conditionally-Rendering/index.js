import { useState } from "react";

export const ConditionalRendering = () => {
  const [authority, setAuthority] = useState("");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <select
        onChange={(e) => {
          setAuthority(e.target.value);
        }}
      >
        <option defaultChecked>Choose a User Role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      {authority === "user" ? (
        <p style={{ backgroundColor: "black", color: "white" }}>User</p>
      ) : authority === "admin" ? (
        <p style={{ backgroundColor: "green" }}>Admin</p>
      ) : (
        <p>Choose A Role For User</p>
      )}
    </div>
  );
};
