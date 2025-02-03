import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/anshika-gupta21")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   });
return (
    <div className="text-center text-3xl text-white m-4 p-4 bg-gray-600">
        <h5>Name: {data.name}</h5>
        <h5>Github Repositories: {data.public_repos}</h5>
        <div className="flex justify-center items-center m-4">
            <img src={data.avatar_url} className="h-50 rounded-[50%]" alt="" />
        </div>
    </div>
);
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch(
      "https://api.github.com/users/anshika-gupta21"
    );
    return response.json();
}
