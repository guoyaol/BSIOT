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
import * as echarts from 'echarts';
import * as userService from '../services/userService'


const { Header, Content, Footer, Sider } = Layout;



const { SubMenu } = Menu;
var lineData = [0, 0, 0, 0, 0, 0, 0];
var barData = [0, 0, 0, 0, 0, 0, 0];
var count_device = 0;
var count_message = 0;

class IndexView extends React.Component {

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };




  componentDidMount() {

    let callback1 = (data) => {
      count_message = data;
      lineData[0] = data;
      console.log(count_message);
      console.log(lineData);
    };
    let callback2 = (data) => {
      count_device = data;
      barData[0] = data;
      console.log(count_device);
      console.log(barData);
    };
    userService.getmsgamount({}, callback1)
    userService.getdeviceamount({}, callback2)

    var myChart = echarts.init(document.getElementById('forms'));

    // Generate data
    var category = [];
    var dottedBase = +new Date();
    //var lineData = [];
    //var barData = [];

    for (var i = 0; i < 7; i++) {
      var date = new Date(dottedBase);
      dottedBase -= 3600 * 24 * 1000
      category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
      ].join('-'));
    };



    myChart.setOption({
      backgroundColor: '#0f375f',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['每日消息数', '当日在线设备数'],
        textStyle: {
          color: '#ccc'
        }
      },
      xAxis: {
        data: category,
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      series: [{
        name: '每日消息数',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData
      }, {
        name: '当日在线设备数',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#14c8d4' },
              { offset: 1, color: '#43eec6' }
            ]
          )
        },
        data: barData
      }, {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: 'rgba(20,200,212,0.5)' },
              { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
              { offset: 1, color: 'rgba(20,200,212,0)' }
            ]
          )
        },
        z: -12,
        data: lineData
      }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
          color: '#0f375f'
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
      }]
    });
  }


  render() {


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
            <Menu.Item key="5" icon={<DesktopOutlined />} onClick={() => {
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
                <div id="forms" style={{ width: '800px', height: '350px' }}></div>

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






