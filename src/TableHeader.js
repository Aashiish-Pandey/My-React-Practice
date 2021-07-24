import React from "react";

const TableHeader = ({ thData }) => {
  const tblHeader = thData.map((head) => <th>{head}</th>);

  return <tr>{tblHeader}</tr>;
};

export default TableHeader;
