import React from "react";
import Donut from "../../components/charts/donutChart/Donut";
import Chart from "../../components/charts/lineChart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import styles from "./Profile.module.scss";

let url = "https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Sidebar />
      <div className={styles.profileContainer}>
        <Navbar />
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.editButton}>Edit</div>
            <h1 className={styles.title}>Information</h1>
            <div className={styles.item}>
              <img src={url} alt="avatar" className={styles.itemImg} />

              <div className={styles.details}>
                <h1 className={styles.userTitle}>John Doe</h1>

                <div className={styles.userDetail}>
                  <span className={styles.key}>Email:</span>
                  <span className={styles.value}>johndoe@gmail.com</span>
                </div>
                <div className={styles.userDetail}>
                  <span className={styles.key}>Phone: </span>
                  <span className={styles.value}>+91-9876543210</span>
                </div>
                <div className={styles.userDetail}>
                  <span className={styles.key}>Address: </span>
                  <span className={styles.value}>
                    3/4XX, near Pavillian Mall, Senapati Bapad Road, Pune,
                    Maharashtra
                  </span>
                </div>
                <div className={styles.userDetail}>
                  <span className={styles.key}>Member Since: </span>
                  <span className={styles.value}>
                    {new Date().toISOString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles.right}>
          </div> */}
            <Chart/>
        </div>
        <div className={styles.bottom}>
        <h1 className={styles.title}>Recent Transactions</h1>
          <div className={styles.listContainer}>
          <List/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
