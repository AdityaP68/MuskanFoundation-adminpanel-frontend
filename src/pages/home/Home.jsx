import React from "react";
import Donut from "../../components/charts/donutChart/Donut";
import Chart from "../../components/charts/lineChart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.homeContainer}>
        <Navbar />
        <div className={styles.widgets}>
          <Widget title="members" counter="31234" />
          <Widget title="volunters" />
          <Widget title="credit" moneyField={true} />
          <Widget title="debit" moneyField={true} />
        </div>
        <div className={styles.charts}>
          <Donut/>
          <Chart/>
        </div>
        <div className={styles.listContainer}> 
            <div className={styles.listTitle}>
              Latest Transactions
            </div>
            <List/>
        </div>
      </div>
    </div>
  );
};

export default Home;
