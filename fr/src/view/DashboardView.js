import React, { useState } from "react";
import { Row, Col } from "antd";

import { Card} from 'antd';

const lineChartDefaultData = {
  "New Visits": {
    expectedData: [10, 12, 61, 34, 15, 16, 65],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  }
};



const Dashboard = () => {



const count_device=3;
const count_message=129;



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


    </div>
  );
};

export default Dashboard;
