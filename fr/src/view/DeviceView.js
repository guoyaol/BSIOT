import { Table, Button, Form, Descriptions } from 'antd';
import { Icon, Input } from 'antd';
import React from 'react';
import { ReactDOM } from 'react';
import { setTimeout } from 'timers';
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

//TODO:用API获取所有设备device
//这个API可能得改一下，改成返回数据库device里所有设备
//前端可以实现筛选
var devicedata = [
    {
        id: 1,
        clientId: 'client1',
        name: 'Ship',
        description: 'New York No. 1 Lake Park'
    },
    {
        id: 2,
        clientId: 'client2',
        name: 'Plane',
        description: 'New York No. 1 Lake Park'
    },
];

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}



const { Header, Content, Footer, Sider } = Layout;



const { SubMenu } = Menu;

class App extends React.Component {


    componentDidMount() {
        // To disable submit button at the beginning.
        this.props.form.validateFields();
    }

    constructor(props) {
        　　super(props)
        　　
        　　this.state = {
        　　　　isLoading: false,
        　　}
        }

    componentWillMount(){
        this.setState({isLoading: true})

        let callback= (data) => {
            devicedata=data
            console.log(devicedata)
            this.setState({isLoading: false})
        };
        userService.showalldevice({},callback)
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

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };


    render() {
        　　let {isLoading} = this.state
        　　if (isLoading) {
        　　　　return<div>isLoading…</div>
        　　} 

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');



        const { collapsed } = this.state;





        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [
            {
                title: 'clientId',
                dataIndex: 'clientId',
                key: 'clientId',
                filters: [{ text: 'client1', value: 'client1' },
                { text: 'client2', value: 'client2' },
                { text: 'client3', value: 'client3' },
                { text: 'client4', value: 'client4' },
                { text: 'client5', value: 'client5' },
                ],
                filteredValue: filteredInfo.clientId || null,
                onFilter: (value, record) => record.clientId.includes(value),

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
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
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
                            <Table columns={columns} dataSource={devicedata} onChange={this.handleChange} />
                        </div>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>“设备已联网”物联网平台</Footer>
                </Layout>



            </Layout>


        );
    }
}

const DeviceView = Form.create()(App);
// ReactDOM.render(<EditableFormTable />, mountNode);

export default DeviceView;
//export default DeviceView