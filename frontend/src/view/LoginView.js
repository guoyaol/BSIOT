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
                        <h3>注意！由于加密算法原因，必须在本机注册的账号才能使用</h3>
                    </div>
                </div>
            </div>
        );

    }
}

export default LoginView;