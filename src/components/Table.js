import React, { useMemo } from "react";
import BTable from "react-bootstrap/Table";
import { useTable } from "react-table";
import fakeData from "../functions/fakeData";

const Table = ({ tasks }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Task",
        accessor: "title",
      },
      {
        Header: "Task ID",
        accessor: "taskId",
      },
    ],
    []
  );

  const data = useMemo(() => fakeData(), []);

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <BTable hover {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </BTable>
  );
};

export default Table;
