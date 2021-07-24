import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const MyTable = ({ tblData }) => {
  console.log(tblData);
  const thData = Object.keys(tblData[0]);
  console.log(thData);
  return (
    <table>
      <TableHeader thData={thData} />
      <TableRow tblData={tblData} />
    </table>
  );
};

export default MyTable;
