import React from "react";

const TableHeader = ({ tblHead }) => {
  const tblheader = tblHead.map((head) => <th>{head}</th>);
  return <tr>{tblheader}</tr>;
};

export default TableHeader;
