import React, { useContext } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import FlashSales from "../../component/Flash sales/FlashSales";
import Category from "../../component/Category/Category";
import NewArrival from "../../component/NewArrival/NewArrival";
import NewMonthSales from "../../component/NewMonthSales/NewMonthSales";
import ExploreAllProducts from "../../component/ExploreProducts/ExploreAllProducts";
import styles from "./Home.module.css";
import SalesMap from "./Sales";
import { ThemeContext } from "../../GlobalContext";
import Shop from "../Shop/Shop";

function Home() {
  // const { sum, DataContext, isLoading } = useContext(ThemeContext);
  // console.log(isLoading, sum([10, 20, 30, 40]));
  return (
    <div>
      <Sidebar />
      <FlashSales />
      <div>
        <SalesMap />
        <div className="text-center m-10">
          <button className={styles.button}>View All Products</button>
        </div>
      </div>
      <Category />
      <NewMonthSales />
      <ExploreAllProducts />
      <NewArrival />
      {/* <Shop Datacontext={DataContext} /> */}
    </div>
  );
}

export default Home;
