import React, { useEffect } from "react";
import { useFetch } from "./UseFetch";

export default function CustomHooks() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const option = { method: "get", headers: {} };
  const { loading, data: dataUser } = useFetch(url, option);

  useEffect(() => {
    console.log(dataUser);
  }, [dataUser]);
  return (
    <div>
      <h1>Custom Hooks</h1>
      {loading
        ? "Loading..."
        : dataUser.map((data) => (
            <div key={data.id}>Nama User: {data.name}</div>
          ))}
    </div>
  );
}
