import Sidebar from "../../component/Sidebar/Sidebar";
import FlashSales from "../../component/Flash sales/FlashSales";
import Category from "../../component/Category/Category";
import NewArrival from "../../component/NewArrival/NewArrival";
import NewMonthSales from "../../component/NewMonthSales/NewMonthSales";
import ExploreAllProducts from "../../component/ExploreProducts/ExploreAllProducts";
import styles from "./Home.module.css";
import SalesMap from "./Sales";

function Home() {
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
    </div>
  );
}

export default Home;
