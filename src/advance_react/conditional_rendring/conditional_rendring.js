import React, { useState, useEffect } from "react";

function ConditionalRendering() {
  let [isLoading, setIsLoading] = useState(true);
  let [user] = useState("Default user");

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <h1>{user}</h1>;
}

export default ConditionalRendering;
