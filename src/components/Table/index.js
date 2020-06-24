import React from "react";

const Table = ({ columns = [], dataSource = [], hideHeader = false }) => {
  return (
    <div className="w-full overflow-scroll pb-4">
      <table className="table-auto w-full">
        {!hideHeader && (
          <thead className="border-t border-b">
            <tr>
              {columns.map(column => (
                <th className="text-xs p-4">{column.title}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {dataSource.map(data => (
            <tr className="hover:bg-gray-200">
              {columns.map(column => (
                <td className="text-base px-4 py-2">
                  {column.render
                    ? column.render(data[column.key], data)
                    : data[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
