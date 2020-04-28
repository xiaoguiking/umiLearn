import React, { Component } from 'react';
import { Tabs, Switch } from 'antd';
// import Item from 'antd/lib/list/Item';

const { TabPane } = Tabs;

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onTabChange(key) {
        this.props.onTabChange(key);
        this.setState({key});
    }

    onDataChange(item, checked, e) {
        this.props.onDataChange(item, checked, e)
    }
    renderData(data) {
        return data.map((item,index) => {
            return (
                <div key={item.id}>
                    <Switch />
                    <span>{item.name}</span>
                    <i />
                </div>
            )
        })
    }
    render() {
        // , initHotData 
        let { initWindyValue} = this.props;
        console.log(this.props, 'props');
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={::this.onTabChange}>
                    <TabPane tab="天气数据" key="1">
                        {
                            this.renderData(initWindyValue)
                        }
            </TabPane>
                    <TabPane tab="赤潮数据" key="2">

            </TabPane>
            </Tabs></div>
        )
    }
}