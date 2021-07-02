import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../css/login.css'
import * as userService from '../services/userService'


class LoginForm extends React.Component {


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                userService.login(values, this.props.history);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" data-testid="submitform">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入你的用户名' }],
                    })(
                        <Input
                            minLength="6"
                            placeholder="用户名"
                            data-testid="uinput"
                            className="uinput"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入你的密码！' }],
                    })(
                        <Input
                            minLength="6"
                            type="password"
                            placeholder="密码"
                            data-testid="pinput"
                            className="pinput"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" data-textid="submit2" htmlType="submit" className="login-form-button">
                        提交
                    </Button>
                    <a href="/register" data-textid="toregister" className="toregister">立即注册</a>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default WrappedLoginForm
