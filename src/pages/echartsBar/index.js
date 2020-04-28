import React, {Component} from 'react';
import echarts from 'echarts';

class EchartsTest extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: [{
                // x轴位置
                position: 'bottom',
                name: '衣服',
                data: ["衬衫", "羊毛衫", "雪纺衫"],
                // name样式控制
                nameTextStyle: {
                    color: 'blue'
                },
                // 是否显示坐标轴轴线
                axisLine: {
                    // show: false
                    // 坐标轴线样式控制
                    lineStyle: {
                        color: 'gray'
                    }
                },
                // 设置刻度标签
                axisLabel: {
                    color: 'cyan'
                },
                // 是否显示坐标轴刻度
                axisTick: {
                    show: false
                }
            }],
            yAxis: [{
                // data: [0,2,4,6,8],
                name: 'y轴',
                // axisLine: {
                //     show: false
                // },
                axisTick: {
                    show: false
                }
            }],
            series: [{
                name: '销量',
                type: 'bar',    
                data: [1,2,3],
            }]
        });
    }
    render() {
        return (
            <div id="main" style={{ width: 400, height: 400 }}></div>
        );
    }
}

export default EchartsTest;