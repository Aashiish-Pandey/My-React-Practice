import React from "react";

const TableRow = ({ tblData }) => {
  return tblData.map((row) => (
    <tr>
      <td>{row.id}</td>
      <td>{row.username}</td>
      <td>{row.email}</td>
      <td>{row.address.city}</td>
      <td>{row.phone}</td>
      <td>{row.website}</td>
      <td>{row.company.name}</td>
    </tr>
  ));
};

export default TableRow;
