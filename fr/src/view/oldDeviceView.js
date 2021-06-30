import { Table, Button, Form, Descriptions } from 'antd';
import { Icon, Input } from 'antd';
import React from 'react';
import { ReactDOM } from 'react';
import { setTimeout } from 'timers';



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

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class App extends React.Component {

  componentDidMount() {
    // To disable submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
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

  render() {

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

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

        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入设备ID！' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="设备ID"
              />,
            )}
          </Form.Item>
          <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入设备名！' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="设备名称"
              />,
            )}
          </Form.Item>
          <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入设备描述！' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="设备描述信息"
              />,
            )}
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
              注册/修改设备信息
            </Button>
          </Form.Item>

        </Form>

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