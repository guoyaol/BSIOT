import { Table, Button,Form, Descriptions } from 'antd';
import React from 'react';
import { ReactDOM } from 'react';



//TODO:用API获取所有设备device
//这个API可能得改一下，改成返回数据库msg_device里所有设备
//前端可以实现筛选
const data = [
  {
    id: 1,
    clientid: 'client1',
    name: 'Ship',
    description: 'New York No. 1 Lake Park'
  },
  {
    id: 2,
    clientid: 'client2',
    name: 'Plane',
    description: 'New York No. 1 Lake Park'
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
        title: '设备名称',
        dataIndex: 'name',
        key: 'name',

        ellipsis: true,
      },
      {
        title: '设备描述',
        dataIndex: 'description',
        key: 'description',

        ellipsis: true,
      },
      
    ];
    return (
      <div>
        <div className="table-operations">
          <Button onClick={this.clearFilters}>清除过滤器</Button>
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