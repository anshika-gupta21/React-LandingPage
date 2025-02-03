import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const {userId} = useParams();
  return <div className="text-center m-4 font-bold bg-orange-700 p-4 text-white text-3xl">User: {userId}</div>;
}

export default User;
