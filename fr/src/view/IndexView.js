import React from 'react';
import { Row, Col } from "antd";

import { Card } from 'antd';

import { NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LikeOutlined
} from '@ant-design/icons';

import * as userService from '../services/userService'


const { Header, Content, Footer, Sider } = Layout;



const { SubMenu } = Menu;

class IndexView extends React.Component {

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };


  render() {
    const count_device = 3;
    const count_message = 129;
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<LikeOutlined />} onClick={() => { this.props.history.push("/index"); }}>
              <LikeOutlined />    主页
            </Menu.Item>
            <Menu.Item key="2" icon={<LikeOutlined />} onClick={() => { this.props.history.push("/device"); }}>
              <LikeOutlined />    设备管理
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />} onClick={() => { this.props.history.push("/message"); }}>
              <LikeOutlined />    消息查询
            </Menu.Item>
            <Menu.Item key="4" icon={<DesktopOutlined />} onClick={() => { this.props.history.push("/map"); }}>
              <LikeOutlined />    地图
            </Menu.Item>
            <Menu.Item key="5" icon={<DesktopOutlined />} onClick={() => 
              {
              userService.logout()
              this.props.history.push("/login"); 
              }}>
              <LikeOutlined />    退出登陆
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>

            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
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
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>“设备已联网”物联网平台</Footer>
        </Layout>



      </Layout>


    );
  }
}

export default IndexView






