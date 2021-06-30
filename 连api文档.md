相当于路由管理：目录、页面切换：/Users/guoyaoli/Documents/BSIOT/react_frontend/src/config



1.登陆界面：已画完

BSIOT/react_frontend/src/views/login



2.注册界面：已画完

BSIOT/react_frontend/src/views/register

目前把它做在了登陆以后界面，左边的一个子栏目里。

还没有尝试连API



3.设备消息展示：已画完

更改下后端api，返回所有的msg_device

/Users/guoyaoli/Documents/BSIOT/react_frontend/src/views/message

替换const data即可

```javascript
//TODO:用API获取所有消息

//http://localhost:8080/getallinfo?clientid=device0001

//这个API可能得改一下，改成返回数据库里的所有消息msg_device

//前端可以实现筛选

const data = [
```





4.地图界面：已画完

BSIOT/react_frontend/src/views/map

把两个list替换成真实数据即可

```javascript
//API：利用 http://localhost:8080/getlatestalert

//我更改了这个API，现在他会返回每个设备的最新信息

var devicelist = [
  //count为4的是alert=1的告警设备

​    {"text":"client1","location":"120.403119,30.929543","count":4},

​    {"text":"client2","location":"113.22183,28.191712","count":4},


//count为1的是alert=0普通设备
​    {"text":"client3","location":"126.49,41","count":1},

​    {"text":"client4","location":"126,25","count":1},

];

//API：选中某一个client，展示历史路径

//http://localhost:8080/gethistory?clientid=device0001

var history = [

​    {lng: 120.403119, lat: 30.929543},

​    {lng: 110.265139, lat: 39.978658},

​    {lng: 116.217996, lat: 39.904309}

];
```



5.设备管理界面：大致画完，修改框同时实现注册/修改的逻辑还需要考虑

可以展示内容。画了一个修改框（但逻辑可能还有问题）



6.dashboard:已画完

/Users/guoyaoli/Documents/BSIOT/react_frontend/src/views/dashboard

把这两个常量替换一下就好了，折线图不要管了（没有这个的API，没必要浪费时间）

```javascript
const count_device=3;

const count_message=129;
```





