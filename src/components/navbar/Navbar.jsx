import React from "react";
import styles from "./Navbar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <NotificationsIcon className={styles.icon} />
            <div className={styles.counter}>1</div>
          </div>
          <div className={styles.item}>
            <div className={styles.imgContainer}>
              {/* <img src="" alt='text'/> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
