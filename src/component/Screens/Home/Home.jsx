import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import FlashSales from "../../Flash sales/FlashSales";
import Product from "../../Product/Product";
import Category from "../../Category/Category";
import NewArrival from "../../NewArrival/NewArrival";
import NewMonthSales from "../../NewMonthSales/NewMonthSales";
import { Sales } from "../../Data/Sales";
import ExploreAllProducts from "../../ExploreProducts/ExploreAllProducts";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <Sidebar />
      <FlashSales />
      <div>
        <div className=" lg:flex  grid grid-cols-1 justify-center md:grid md:grid-cols-2">
          {Sales &&
            Sales.map((sales) => {
              return <Product key={sales.id} props={sales} />;
            })}
        </div>
        <div className=" text-center m-10">
          <button className={styles.button}>View All Products</button>
        </div>
      </div>
      <Category />
      <NewMonthSales />
      <ExploreAllProducts />
      <NewArrival />
    </div>
  );
}

export default Home;
