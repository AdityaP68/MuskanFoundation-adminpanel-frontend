import React from "react";
import styles from "./Widget.module.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Widget = ({ title, counter, moneyField }) => {
  return (
    <div className={styles.widget}>
      <div className={styles.left}>
        <span className={styles.title}>{title ? title : "title"}</span>
        <span className={styles.counter}>
          {moneyField ? <span>&#8377; </span> : ""}
          {counter ? counter : 23121}
        </span>
        <span className={styles.link}>yearly data</span>
      </div>
      <div className={styles.right}>
        <div className={`${styles.percentage} ${styles.positive}`}>
          <KeyboardArrowUpIcon className={styles.icon} />
          20 %
        </div>
      </div>
    </div>
  );
};

export default Widget;
