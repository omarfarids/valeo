import React from "react";

type LabtopProps = {
  laptop_model: string;
  laptop_vendor: string;
  hard_disk_capacity: string;
  hard_disk_type: string;
  ram: string;
  processor: string;
  graphics: string;
  weight: string;
  price: string;
  price_currency: string;
};

const Labtop = ({
  laptop_model,
  laptop_vendor,
  hard_disk_capacity,
  hard_disk_type,
  ram,
  processor,
  graphics,
  weight,
  price,
  price_currency,
}: LabtopProps) => {
  return (
    <tr className="text-center">
      <td className="w-48 text-start pl-5 py-3 sm:py-5">
        <p className="font-medium">{laptop_vendor}</p>
        <span className="text-fontGray">{laptop_model}</span>
      </td>
      <td className="w-32 sm:w-auto">
        <p className="font-medium">{hard_disk_capacity}</p>
        <span className="text-fontGray">{hard_disk_type}</span>
      </td>
      <td className="w-32 sm:w-auto font-medium">{ram}</td>
      <td
        className="w-32 sm:w-auto font-medium truncate cursor-pointer"
        title={processor}
      >
        {processor}
      </td>
      <td className="w-32 sm:w-auto font-medium">{graphics}</td>
      <td className="w-32 sm:w-auto text-fontGray">{weight}</td>
      <td className="w-32 sm:w-auto font-medium">{price_currency + price}</td>
      <td>
        <button className="text-fontCrimson bg-btnColor px-5 py-1 rounded-md font-medium hover:shadow">
          Buy Now
        </button>
      </td>
    </tr>
  );
};

export default Labtop;
