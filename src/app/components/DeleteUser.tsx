"use client";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "./mutation";

const DeleteUser: React.FC = () => {
  const [deleteUser] = useMutation(DELETE_USER);
  const [userId, setUserId] = useState("");

  const handleDelete = async () => {
    if (!userId) return alert("Please provide a user ID");
    try {
      await deleteUser({ variables: { id: userId } });
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
};

export default DeleteUser;
