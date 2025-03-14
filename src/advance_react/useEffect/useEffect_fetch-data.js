import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

function FetchData() {
  let [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>GitHub Users</h1>
      <ul>
        {/* <li>
          <p className="circle"></p>
          <div>
            <h4>Michael Boateng</h4>
            <a href="#">Profile</a>
          </div>
        </li> */}
        {console.log(users)}
      </ul>
    </>
  );
}

export default FetchData;
