import { Table, Button,Form } from 'antd';
import React from 'react';
import { ReactDOM } from 'react';

/*
CREATE TABLE `msg_device`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `alert` int(0) NULL DEFAULT NULL,
  `clientid` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `info` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lat` double NULL DEFAULT NULL,
  `lng` double NULL DEFAULT NULL,
  `timestamp` double NULL DEFAULT NULL,
  `value` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;
*/

//TODO:用API获取所有消息
//http://localhost:8080/getallinfo?clientid=device0001
//这个API可能得改一下，改成返回数据库里的所有消息msg_device
//前端可以实现筛选
const data = [
  {
    id: 0,
    alert: 1,
    clientid: 'client1',
    info: 'New York No. 1 Lake Park',
    lat:129,
    lng:29,
    timestamp:123123123,
    value:29,
  },
  {
    id: 2,
    alert: 0,
    clientid: 'client2',
    info: 'London No. 1 Lake Park',
    lat:128.5,
    lng:28,
    timestamp:123123122,
    value:2,
  },

];

class App extends React.Component {
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

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'clientid',
        dataIndex: 'clientid',
        key: 'clientid',
        filters: [{ text: 'client1', value: 'client1' }, 
        { text: 'client2', value: 'client2' }, 
        { text: 'client3', value: 'client3' }, 
        { text: 'client4', value: 'client4' }, 
        { text: 'client5', value: 'client5' }, 
      ],
        filteredValue: filteredInfo.clientid || null,
        onFilter: (value, record) => record.clientid.includes(value),

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
      <div>
        <div className="table-operations">
          <Button onClick={this.setAgeSort}>Sort alert</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </div>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
      </div>
    );
  }
}

//ReactDOM.render(<App />, mountNode);

const EditableFormTable = Form.create()(App);
// ReactDOM.render(<EditableFormTable />, mountNode);

export default EditableFormTable;