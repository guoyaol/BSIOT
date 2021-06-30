import React from 'react';

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
        const { collapsed } = this.state;
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<LikeOutlined />} onClick={() => {this.props.history.push("/device");}}>
                  <LikeOutlined />    设备管理
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />} onClick={() => {this.props.history.push("/message");}}>
                <LikeOutlined />    消息查询
                </Menu.Item>
                <Menu.Item key="3" icon={<DesktopOutlined />} onClick={() => {this.props.history.push("/map");}}>
                <LikeOutlined />    地图
                </Menu.Item>

              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  Bill is a cat.
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        );
  }
}

export default IndexView






