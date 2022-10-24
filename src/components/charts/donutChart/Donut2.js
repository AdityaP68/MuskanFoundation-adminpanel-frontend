import React from "react";
import Chart from "react-apexcharts";

function Donut2() {
  return (
    <React.Fragment>
      <div >
        <h2 className="text-left">Donut Chart</h2>
        <Chart
          type="donut"
          width={400}
          height={300}
          series={[150, 50]}
          options={{
            labels: ["Credit", "Debit"],
            title: {
              text: "Transaction",
              // align:"center",
            },

            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: false,

                      //formatter: () => '343',
                      fontSize: 30,
                      color: "#f90000",
                    },
                  },
                },
              },
            },

            dataLabels: {
              enabled: true,
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
export default Donut2;
