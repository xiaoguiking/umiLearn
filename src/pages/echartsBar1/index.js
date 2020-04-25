import React, {Component} from 'react';
import echarts from 'echarts';

class EchartsTest1 extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: '电阻值' },
            tooltip: {
                trigger: 'axis',
                formatter: `{b0}<br/>{a0}: {c0}%`
            },
            yAxis: [{
                // x轴位置
                position: 'left',
                // name: '衣服',
                data: ["衬衫", "羊毛衫", "雪纺衫"],
                // name样式控制
                nameTextStyle: {
                    color: 'blue'
                },
                // 是否显示坐标轴轴线
                axisLine: {
                    // show: false
                    // 坐标轴线样式控制
                    show: false,
                    lineStyle: {
                        color: 'gray'
                    }
                },
                // 设置刻度标签
                axisLabel: {
                    color: 'cyan',
                    // 这里设置衬衫 也有%
                    // formatter: '{value}%' ,
                    
                },
                // 是否显示坐标轴刻度
                axisTick: {
                    show: false
                }
            }],
            xAxis: [{
                show: false,
                name: 'y轴',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }],
            series: [{
                label: {
                    show: true,
                    position: 'inside',
                    formatter: `{c0}%`
                },
                name: '销量',
                type: 'bar',    
                data: [10, 8.4, 5.7],
            }]
        });
    }
    render() {
        return (
            <div id="main" style={{ width: 400, height: 400 }}></div>
        );
    }
}

export default EchartsTest1;