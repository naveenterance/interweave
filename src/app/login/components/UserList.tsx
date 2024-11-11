"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../../utils/db/auth/mutation";

const UserList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users: {error.message}</p>;

  return (
    <div>
      <h2>All Users</h2>
      {data?.users?.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {data.users.map((user: any) => (
            <li
              key={user.id}
              style={{
                marginBottom: "1em",
                borderBottom: "1px solid #ccc",
                paddingBottom: "1em",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={user.avatar || "https://via.placeholder.com/50"}
                  alt={user.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginRight: "1em",
                  }}
                />
                <div>
                  <h3>{user.name}</h3>
                  <p>Email: {user.email}</p>
                  <p>password: {user.password}</p>
                  {user.cart?.length > 0 ? (
                    <p>Cart Items: {user.cart.join(", ")}</p>
                  ) : (
                    <p>No items in cart</p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
