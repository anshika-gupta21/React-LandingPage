import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const {userId} = useParams();
  return <div className="text-center my-4 font-bold">User: {userId}</div>;
}

export default User;
