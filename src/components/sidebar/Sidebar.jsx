import React from "react";
import styles from "./Sidebar.module.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import PaymentIcon from "@mui/icons-material/Payment";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <section className={styles.top}>
        <span className={styles.logo}><img src="/images/logo.png"/></span>
      </section>
      <hr />
      <section className={styles.center}>
        <ul>
          <p className={styles.title}>MAIN</p>
          <li>
            <DashboardIcon className={styles.icon} />
            <span>Dashboard</span>
          </li>
          <p className={styles.title}>LISTS</p>
          <li>
            <PersonIcon className={styles.icon} />
            <span>Users</span>
          </li>
          <li>
            <PaymentIcon className={styles.icon} />
            <span>Transactions</span>
          </li>
          <li>
            <CampaignIcon className={styles.icon} />
            <span>Campaigns</span>
          </li>
          <p className={styles.title}>USEFUL</p>
          <li>
            <NotificationsIcon className={styles.icon} />
            <span>Notifications</span>
          </li>
          <p className={styles.title}>SERVICES</p>
          <li>
            <HelpIcon className={styles.icon} />
            <span>System Help</span>
          </li>
          <p className={styles.title}>PROFILE</p>
          <li>
            <AccountCircleIcon className={styles.icon} />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className={styles.icon} />
            <span>Log Out</span>
          </li>
        </ul>
      </section>
      {/* <section className={styles.bottom}>
        <div className={styles.colorOption}></div>
        <div className={styles.colorOption}></div>
      </section> */}
    </div>
  );
};

export default Sidebar;
