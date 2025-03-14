import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

function GetUser() {
  let [isLoading, setIsLoading] = useState(true);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState("Default User");

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.status >= 200 && data.status <= 299) {
          console.log(data);
          let { login } = data;
          setIsLoading(false);
          setUser(login);

          throw new Error(data.statusText);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .catch((error) => console.error(error));
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  return <h1>{user}</h1>;
}

export default GetUser;
