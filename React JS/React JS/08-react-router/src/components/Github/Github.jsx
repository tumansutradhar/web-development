import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/tumansutradhar")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center p-5 gap-5 text-2xl font-semibold">
      <img className="w-40 rounded-full" src={data.avatar_url} alt="github-img" />
      <p>GitHub Followers: {data.followers}</p>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/tumansutradhar");
  return response.json();
};
