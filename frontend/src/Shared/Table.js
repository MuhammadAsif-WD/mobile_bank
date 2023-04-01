import React from "react";

const Table = () => {
  return (
    <div className="overflow-scroll">
      <table class="table-fixed w-full">
        <thead className="w-full">
          <tr>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              No
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Date
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              TRX
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Payment
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Service
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Customer
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Recipient
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Amount
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Commission
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="max-h-10">
          <tr>
            <td className="text-start border border-secondary p-1 font-normal">
              Not Found
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
              Not Found
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
              Not Found
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
              Not Found
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
              Not Found
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
              Not Found
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
              Not Found
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
              Not Found
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
              Not Found
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
              Not Found
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
