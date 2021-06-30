import React, { useState, Component } from "react";
import { Polyline, Map, MarkerList, MapTypeControl, ScaleControl, NavigationControl, InfoWindow } from 'react-bmap'
import { simpleMapStyle } from 'react-bmap'
import * as userService from '../services/userService'


//API：利用 http://localhost:8080/getlatestalert
//我更改了这个API，现在他会返回每个设备的最新信息
var devicelist = [
    //count为4的是alert=1的告警设备
    { "text": "client1", "location": "120.403119,30.929543", "count": 4 },
    { "text": "client2", "location": "113.22183,28.191712", "count": 4 },
    //count为1的是alert=0普通设备
    { "text": "client3", "location": "126.49,41", "count": 1 },
    { "text": "client4", "location": "126,25", "count": 1 },
];
//API：选中某一个client，展示历史路径
//http://localhost:8080/gethistory?clientid=device0001
var history = [
    { lng: 120.403119, lat: 30.929543 },
    { lng: 110.265139, lat: 39.978658 },
    { lng: 116.217996, lat: 39.904309 }
];




export default class OurMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
        }
    }
    componentWillMount() {
        // userService.login({username:"abc",password:"abc"});
        this.setState({ isLoading: true })
        let callback = (data) => {
            let list = [];
            for (let i = 0; i < data.length; i++) {
                let color = 1;
                if (data[i].alert == 1) {
                    color = 4;
                }
                let loc = "" + data[i].lng + "," + data[i].lat
                let item = { text: data[i].clientId, location: loc, count: color };
                list.push(item);
            }
            console.log(list)
            devicelist = list;
            console.log(devicelist)
            this.setState({ isLoading: false })
        };
        userService.getlatestalert({}, callback)
    }
    render() {
        let { isLoading } = this.state
        if (isLoading) {
            return <div>isLoading…</div>
        }
        return <div>
            <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=vFK8qB9klq53fgxNFvpNZxwBqqhznKG6"></script>
            <Map style={{ height: '600px', width: '800px' }} center={{
                lng: 105.403119,
                lat: 38.028658
            }}
                zoom='5'
                mapStyle={simpleMapStyle}>
                <MarkerList
                    data={devicelist}
                    onClick={(item) => {
                        console.log(item);
                    }}
                    splitList={{
                        4: '#d53938',
                        3: '#fe6261',
                        2: '#ffb02d',
                        1: '#80db69'
                    }}
                    isShowNumber={true}
                    animation={true}
                    multiple={true}
                    autoViewport={true}
                />
                <Polyline
                    strokeColor='green'
                    path={history}
                />
                <NavigationControl />
                <MapTypeControl />
                <ScaleControl />
            </Map>
        </div>
    }
}
