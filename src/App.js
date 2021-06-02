import React, { useState, useEffect } from "react";
import MyTable from "./MyTable";
import "./App.css";

const App = () => {
  const [tblData, setTblData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const URL = "https://jsonplaceholder.typicode.com/users";

  const getData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setTblData(data);
        setLoading(false);
      });
  };

  useEffect(() => getData(), []);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="App">
      <MyTable tblData={tblData} />
    </div>
  );
};

export default App;
