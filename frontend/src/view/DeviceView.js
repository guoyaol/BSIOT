import { Table, Button, Form, Descriptions } from 'antd';
import { Icon, Input } from 'antd';
import React from 'react';
import { Row, Col } from 'antd';
import {
    HomeTwoTone,
    PartitionOutlined,
    MessageOutlined,
    ZoomInOutlined,
    RollbackOutlined
  } from '@ant-design/icons';

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




    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
        }
    }

    componentWillMount() {
        this.setState({ isLoading: true })

        let callback = (data) => {
            devicedata = data
            console.log(devicedata)
            this.setState({ isLoading: false })
        };
        userService.showalldevice({}, callback)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                userService.createdevice(values, this.props.history);
            }
        });
    };

    handleRename = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {

            userService.modifydevice(values, this.props.history);

        });
    };

    handleDelete = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            userService.deletedevice(values, this.props.history);

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
        let { isLoading } = this.state
        if (isLoading) {
            return <div>isLoading…</div>
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
                        <Menu.Item key="1" onClick={() => { this.props.history.push("/index"); }}>
                            <HomeTwoTone />   主页
                        </Menu.Item>
                        <Menu.Item key="2" onClick={() => { this.props.history.push("/device"); }}>
                            <PartitionOutlined />   设备管理
                        </Menu.Item>
                        <Menu.Item key="3" onClick={() => { this.props.history.push("/message"); }}>
                            <MessageOutlined />    消息查询
                        </Menu.Item>
                        <Menu.Item key="4" onClick={() => { this.props.history.push("/map"); }}>
                            <ZoomInOutlined />    地图
                        </Menu.Item>
                        <Menu.Item key="5" onClick={() => {
                            userService.logout()
                            this.props.history.push("/login");
                        }}>
                            <RollbackOutlined />    退出登陆
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>

                        <div>
                            <Row type="flex" align="middle" justify="center"  >
                                <Col >
                                    <Form onSubmit={this.handleSubmit} className="login-form" data-testid="submitform">

                                        <Form.Item>
                                            {getFieldDecorator('clientid', {
                                                rules: [{ required: true, message: '请输入设备ID！' }],
                                            })(
                                                <Input
                                                    placeholder="设备ID" data-testid="uinput" className="uinput"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('name', {
                                                rules: [{ required: true, message: '请输入设备名称！' }],
                                            })(
                                                <Input
                                                    placeholder="设备名称" data-testid="uinput" className="uinput"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('description', {
                                                rules: [{ required: true, message: '请输入设备描述！' }],
                                            })(
                                                <Input
                                                    placeholder="设备描述" data-testid="uinput" className="uinput"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            <Button data-testid="submit" type="primary" htmlType="submit" className="login-form-button">
                                                创建新设备
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Col>
                                <Col>
                                    <Form onSubmit={this.handleRename} className="login-form" data-testid="submitform">

                                        <Form.Item>
                                            {getFieldDecorator('clientid', {
                                                rules: [{ required: true, message: '请输入设备ID！' }],
                                            })(
                                                <Input
                                                    placeholder="需要修改设备的ID" data-testid="uinput" className="uinput"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('name', {
                                                rules: [{ required: true, message: '请输入设备名称！' }],
                                            })(
                                                <Input
                                                    placeholder="新设备名称" data-testid="uinput" className="uinput"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            <Button data-testid="submit" type="primary" htmlType="submit" className="login-form-button">
                                                修改设备名称
                                            </Button>
                                        </Form.Item>
                                    </Form>


                                    <Form onSubmit={this.handleDelete} className="login-form" data-testid="submitform">

                                        <Form.Item>
                                            {getFieldDecorator('clientid', {
                                                rules: [{ required: true, message: '请输入设备ID！' }],
                                            })(
                                                <Input
                                                    placeholder="需要删除设备的ID" data-testid="uinput" className="uinput"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            <Button data-testid="submit" type="primary" htmlType="submit" className="login-form-button">
                                                删除设备
                                            </Button>
                                        </Form.Item>
                                    </Form>

                                </Col>

                            </Row>


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