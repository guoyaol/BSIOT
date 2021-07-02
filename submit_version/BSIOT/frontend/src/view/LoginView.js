import React from 'react';
import WrappedLoginForm from '../components/LoginForm';


class LoginView extends React.Component{


    render(){
        return(
            <div className="login-page">
                <div className="login-container">
                    <div className="login-box">
                        <h1 className="page-title">登录</h1>
                        <div className="login-content" data-testid="loginform">
                            <WrappedLoginForm history={this.props.history}/>
                        </div>
                        <h3>测试账号：iotadmin 密码：iotadmin</h3>
                    </div>
                </div>
            </div>
        );

    }
}

export default LoginView;