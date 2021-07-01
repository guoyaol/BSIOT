import {postRequest_v3,postRequest_v2} from "../utils/Ajax";
import {history} from '../utils/history';
import {message} from 'antd';
import {Global} from "../utils/Global";
import cookie from 'react-cookies'

export const showalldevice = (data,callback) => {
    const url = `http://localhost:8080/showalldevice`;
    message.config({
        prefixCls: 'my-message',
        className: 'my-message'
    });
    postRequest_v2(url, data, callback);
};

export const getlatestalert = (data,callback) => {
    const url = `http://localhost:8080/getlatestalert`;
    message.config({
        prefixCls: 'my-message',
        className: 'my-message'
    });
    postRequest_v2(url, data, callback);
};

export const gethistory = (data,callback) => {
    const url = `http://localhost:8080/gethistory`;
    console.log("data:",data);
    message.config({
        prefixCls: 'my-message',
        className: 'my-message'
    });
    postRequest_v2(url, data, callback);
};

export const getmsgamount = (data,callback) => {
    const url = `http://localhost:8080/gettotalamount`;
    message.config({
        prefixCls: 'my-message',
        className: 'my-message'
    });
    postRequest_v2(url, data, callback);
};

export const getdeviceamount = (data,callback) => {
    const url = `http://localhost:8080/getdeviceamount`;
    message.config({
        prefixCls: 'my-message',
        className: 'my-message'
    });
    postRequest_v2(url, data, callback);
};

export const getallinfo = (data,callback) => {
    const url = `http://localhost:8080/getallinfo`;
    message.config({
        prefixCls: 'my-message',
        className: 'my-message'
    });
    postRequest_v2(url, data, callback);
};


export const login = (data,his) => {
    const url = `http://localhost:8080/login`;
    message.config({
        prefixCls: 'my-message',
        className: 'my-message'
    });
    console.log("data:",data);
    const callback = (data) => {
        console.log("login",data)
        if(data.code == 401) {
            alert(data.message);
        }
        if(data.code == 200){
            Global.set('login',1);
            Global.setName(data.data.name);
            message.success(data.message);
            his.push("/index");
            /*
            if(data.data.authorities[0].authority=="ROLE_ADMIN"){
                his.push("/admin")
            }
            else{
                his.push("/index");
            }*/

        }
    };
    postRequest_v3(url, data, callback);
};


export const register = (data,his) => {
    const url = `http://localhost:8080/register`;
    console.log("data:",data);
    message.config({
        prefixCls: 'my-message',
        className: 'my-message'
    });
    const callback = (data) => {
        console.log("register",data)
        if(data== 0) {
            message.error("注册失败");
            alert("用户名或邮箱重复")
        }
        if(data!=0) {
            his.push("/login");
            message.success("注册成功");
        }
    };
    postRequest_v2(url, data, callback);
};


export const logout = () => {
    const url = `http://localhost:8080/logout`;
    message.config({
        prefixCls: 'my-message',
        className: 'my-message'
    });
    const callback = (data) => {
        if(data.code == 200) {
            //cookie.remove('JSESSIONID');
            Global.logout();
            Global.setName("");
            message.success(data.message);
            //his.push("/index")
        }
        else{
            message.error(data.message);
        }
    };
    postRequest_v3(url, {}, callback);
};





export const checklogin = (callback) => {
    const url = `http://localhost:8080/checklogin`;
    postRequest_v3(url, {}, callback);
};


