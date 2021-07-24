import React, { useState, useEffect } from "react";
import MyTable from "./MyTable";

const App = () => {
  const [tblData, setTblData] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async () => {
    const jsonData = await fetch(URL);
    const data = await jsonData.json();

    setTblData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  } else return <MyTable tblData={tblData} />;
};

export default App;
