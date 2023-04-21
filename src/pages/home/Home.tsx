import React, { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import Labtop from "../../components/Labtop";
import Spinner from "../../components/Spinner";
import TableHeader from "../../components/TableHeader";

type Props = {};

const Home = (props: Props) => {
  const [pageCounter, setPageCounter] = useState(10);
  const { products } = useContext(AppContext);

  console.log(products);

  if (!products) {
    return <Spinner />;
  }

  return (
    <div className="p-3 md:p-10">
      <h1 className="text-xl pb-3">Labtops Products</h1>
      <p className="text-fontGray text-sm pb-3">{products.length} Products</p>
      <div className="overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {products
              ?.slice(pageCounter - 10, pageCounter)
              .map((labtop: any, index: number) => {
                return <Labtop key={index} {...labtop} />;
              })}
          </tbody>
        </table>
      </div>
      <div className="mx-auto my-10 md:w-96 flex flex-row justify-evenly">
        <button
          className="w-24 py-1 hover:shadow bg-tableHeader rounded-md font-medium"
          onClick={() => setPageCounter(pageCounter - 10)}
        >
          Previous
        </button>
        <button
          className="w-24 py-1 hover:shadow bg-tableHeader rounded-md font-medium"
          onClick={() => setPageCounter(pageCounter + 10)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
