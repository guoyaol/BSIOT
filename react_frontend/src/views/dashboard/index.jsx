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
import { Card} from 'antd';

const lineChartDefaultData = {
  "New Visits": {
    expectedData: [10, 12, 61, 34, 15, 16, 65],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  }
};



const Dashboard = () => {
  const [lineChartData, setLineChartData] = useState(
    lineChartDefaultData["New Visits"]
  );


const count_device=3;
const count_message=129;

  const handleSetLineChartData = (type) => setLineChartData(lineChartDefaultData[type]);

  return (
      <div className="app-container">
        <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="设备总量" bordered={false}>
            {count_device}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="消息总量" bordered={false}>
            {count_message}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="登陆状态" bordered={false}>
              SUCCESS!
            </Card>
          </Col>
        </Row>
      </div>,

      <div><font size="15">每日消息数</font> </div>
      <LineChart
        chartData={lineChartData}
        styles={{
          padding: 12,
          backgroundColor: "#fff",
          marginBottom: "25px",
        }}
      />

    </div>
  );
};

export default Dashboard;
