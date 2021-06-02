import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const MyTable = ({ tblData, loading }) => {
  const tblHead = Object.keys(tblData[0]);
  return (
    <div>
      <table >
      <TableHeader tblHead={tblHead} />
      <TableRow tblData={tblData} />
      </table>
    </div>
  );
};

export default MyTable;
