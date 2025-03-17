import React from "react";

// importing custom hook
import { useFetch } from "./useFetch";

const url = "https://api.github.com/users";

function Example() {
  const { isLoading, data } = useFetch(url);
  return <h1>{isLoading ? "Loading..." : "Data is in :)"}</h1>;
}

export default Example;
