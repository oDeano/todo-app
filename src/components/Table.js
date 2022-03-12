import React, { useMemo } from "react";
import BTable from "react-bootstrap/Table";
import { useTable } from "react-table";

const Table = ({ tasks }) => {
  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "isComplete",
      },
      {
        Header: "Task",
        accessor: "title",
      },
    ],
    []
  );

  const data = useMemo(() => tasks, [tasks]);

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <BTable className="table-task" hover {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className={`th-${column.id}`} {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
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
