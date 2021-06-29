import React, { useState } from "react";
import { Row, Col } from "antd";
import "./index.less";
import PanelGroup from "./components/PanelGroup";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import RaddarChart from "./components/RaddarChart";
import PieChart from "./components/PieChart";
import TransactionTable from "./components/TransactionTable";
import BoxCard from "./components/BoxCard";

const lineChartDefaultData = {
  "New Visits": {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  },
  Messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130],
  },
  Purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130],
  },
  Shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130],
  },
};

const Dashboard = () => {
  const [lineChartData, setLineChartData] = useState(
    lineChartDefaultData["New Visits"]
  );

  const handleSetLineChartData = (type) => setLineChartData(lineChartDefaultData[type]);

  return (
    <div className="app-container">

      <div><font size="15">每日消息数</font> </div>
      <LineChart
        chartData={lineChartData}
        styles={{
          padding: 12,
          backgroundColor: "#fff",
          marginBottom: "25px",
        }}
      />
      <div><font size="15">设备总数</font> </div>
      <div className="chart-wrapper">
        <BarChart />
      </div>


    </div>
  );
};

export default Dashboard;
