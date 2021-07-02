import * as echarts from 'echarts';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

var lineData=[1,2,3,4,5,6,3];
var barData=[4,5,6,15,8,9,10]

class ResultView extends Component {
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('forms'));

        // Generate data
        var category = [];
        var dottedBase = +new Date();
        //var lineData = [];
        //var barData = [];

        for (var i = 0; i < 7; i++) {
            var date = new Date(dottedBase);
            dottedBase -= 3600 * 24 * 1000
            category.push([
                date.getFullYear(),
                date.getMonth() + 1,
                date.getDate()
            ].join('-'));
        };



        myChart.setOption({
            backgroundColor: '#0f375f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['每日消息数', '当日在线设备数'],
                textStyle: {
                    color: '#ccc'
                }
            },
            xAxis: {
                data: category,
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
            },
            yAxis: {
                splitLine: { show: false },
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
            },
            series: [{
                name: '每日消息数',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 15,
                data: lineData
            }, {
                name: '当日在线设备数',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#14c8d4' },
                            { offset: 1, color: '#43eec6' }
                        ]
                    )
                },
                data: barData
            }, {
                name: 'line',
                type: 'bar',
                barGap: '-100%',
                barWidth: 10,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: 'rgba(20,200,212,0.5)' },
                            { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                            { offset: 1, color: 'rgba(20,200,212,0)' }
                        ]
                    )
                },
                z: -12,
                data: lineData
            }, {
                name: 'dotted',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {
                    color: '#0f375f'
                },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                z: -10,
                data: lineData
            }]
        });
    }
    render() {
        return (
            <div id="forms" style={{ width: '650px', height: '350px' }}></div>
        )
    }
}


export default ResultView