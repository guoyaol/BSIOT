import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../css/login.css'
import * as userService from '../services/userService'


class RegisterForm extends React.Component {


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                userService.register(values, this.props.history);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" data-testid="submitform">

                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: '请输入你的邮箱！' }],
                    })(
                        <Input
                            placeholder="邮箱地址" data-testid="uinput" className="uinput"
                        />,
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入你的用户名！' }],
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
                    <Button data-testid="submit" type="primary" htmlType="submit" className="login-form-button">
                        立即注册
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedRegisterForm = Form.create({ name: 'register' })(RegisterForm);

export default WrappedRegisterForm
