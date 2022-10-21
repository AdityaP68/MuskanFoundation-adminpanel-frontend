import React from "react";
import styles from "./Donut.module.scss";
import { Pie, PieChart, Legend } from "recharts";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Donut = () => {
  const data = [
    { name: "Credit", amount: 400, value: "#00C49F" },
    { name: "Debit", amount: 500, value: "#FF8042" },
  ];

  return (
    <div className={styles.donut}>
      <div className={styles.top}>
        <h1 className={styles.title}>Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.donutChart}>
          <PieChart
            width={350}
            height={350}
            // style={{ backgroundColor: "blue" }}
          >
            <Legend
              height={36}
              iconType="circle"
              layout="vertical"
              verticalAlign="middle"
              iconSize={10}
              padding={5}
              formatter={(val) => (
                <span
                  style={{ color: "#596579", fontWeight: 500, padding: "10px" }}
                >
                  {val}
                </span>
              )}
            />
            <Pie
              data={data}
              dataKey="amount"
              outerRadius={150}
              innerRadius={100}
              fill="green"
            />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Donut;
