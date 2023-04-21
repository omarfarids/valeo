import React from "react";

const TableHeader = () => {
  return (
    <tr className="text-fontGray bg-tableHeader font-medium">
      <th className="w-48 text-start p-2 rounded-s-lg">Labtop</th>
      <th className="w-32 sm:w-auto">Hard desk</th>
      <th className="w-32 sm:w-auto">RAM</th>
      <th className="w-32 sm:w-auto">Processor</th>
      <th className="w-32 sm:w-auto">Graphics</th>
      <th className="w-32 sm:w-auto">Weight</th>
      <th className="w-32 sm:w-auto">Price</th>
      <th className="rounded-e-lg"></th>
    </tr>
  );
};

export default TableHeader;
