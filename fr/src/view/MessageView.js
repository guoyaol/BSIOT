import React from 'react';
import { Table, Button } from 'antd';
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


/*
{
"id": 39,
"alert": 0,
"clientId": "device0003",
"info": "Device Data 2021/06/29 12:05:32",
"lat": 30.421020793914796,
"lng": 120.22522549629213,
"timestamp": 1624939532141,
"value": 45
}
*/

var alldata = [
  {
    "id": 39,
    "alert": 0,
    "clientId": "device0003",
    "info": "Device Data 2021/06/29 12:05:32",
    "lat": 30.421020793914796,
    "lng": 120.22522549629213,
    "timestamp": 1624939532141,
    "value": 45
  },
  {
    id: 2,
    alert: 0,
    clientId: 'client2',
    info: 'London No. 1 Lake Park',
    lat: 128.5,
    lng: 28,
    timestamp: 123123122,
    value: 2,
  },

];



class MessageView extends React.Component {

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'alert',
      },
    });
  };

  constructor(props) {
    　　super(props)
    　　
    　　this.state = {
    　　　　isLoading: false,
    　　}
    }

  componentWillMount(){
    // userService.login({username:"abc",password:"abc"});
    this.setState({isLoading: true})
     let callback= (data) => {
         alldata=data
         console.log(alldata)
         this.setState({isLoading: false})
     };
     userService.getallinfo({},callback)
 }


  render() {
    　　let {isLoading} = this.state
    　　if (isLoading) {
    　　　　return<div>isLoading…</div>
    　　} 

    const { collapsed } = this.state;

    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'clientId',
        dataIndex: 'clientId',
        key: 'clientId',
        filters: [{ text: 'device0001', value: 'device0001' },
        { text: 'device0002', value: 'device0002' },
        { text: 'device0003', value: 'device0003' },
        { text: 'device0004', value: 'device0004' },
        { text: 'device0005', value: 'device0005' },
        ],
        filteredValue: filteredInfo.clientId || null,
        onFilter: (value, record) => record.clientId.includes(value),

        ellipsis: true,
      },
      {
        title: 'alert',
        dataIndex: 'alert',
        key: 'alert',

        sorter: (a, b) => a.alert - b.alert,
        sortOrder: sortedInfo.columnKey === 'alert' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'info',
        dataIndex: 'info',
        key: 'info',
        filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
        filteredValue: filteredInfo.info || null,
        onFilter: (value, record) => record.info.includes(value),
        sorter: (a, b) => a.info.length - b.info.length,
        sortOrder: sortedInfo.columnKey === 'info' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Lat',
        dataIndex: 'lat',
        key: 'lat',
        sorter: (a, b) => a.lat - b.lat,
        sortOrder: sortedInfo.columnKey === 'lat' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'lng',
        dataIndex: 'lng',
        key: 'lng',
        sorter: (a, b) => a.lng - b.lng,
        sortOrder: sortedInfo.columnKey === 'lng' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Timestamp',
        dataIndex: 'timestamp',
        key: 'timestamp',
        sorter: (a, b) => a.timestamp - b.timestamp,
        sortOrder: sortedInfo.columnKey === 'timestamp' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'value',
        dataIndex: 'value',
        key: 'value',
        sorter: (a, b) => a.value - b.value,
        sortOrder: sortedInfo.columnKey === 'value' && sortedInfo.order,
        ellipsis: true,
      },
    ];

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline">
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

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>

            <div>
              <div className="table-operations">
                <Button onClick={this.clearFilters}>清除过滤器</Button>
                <Button onClick={this.clearAll}>清除过滤器和排序</Button>
              </div>
              <Table columns={columns} dataSource={alldata} onChange={this.handleChange} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>“设备已联网”物联网平台</Footer>
        </Layout>



      </Layout>


    );
  }
}

export default MessageView






