import React, { Component } from 'react';
import List from './list';

export default class Father extends Component{
    constructor(props) {
        super(props);
        this.state={
            switchKey: '',
            weatherData,
            hotData,
        }
    }

    onTabChange(key) {
        this.setState({switchKey: key })
    }


    onDataChange(item, checked, e){
        if(this.state.switchKey === '1'){
            let {weatherData} = this.state;

            weatherData = weatherData.map((ele,index) => {
                if(ele.id === item.id) {
                    ele.active = checked;
                    ele.open = checked;
                }
                return ele;
            })
this.setState({ weatherData});
        }
        else {
            let { hotData } = this.state;
            hotData = hotData.map((ele) => {
      
              if (ele.id === item.id) {
                e.active = checked;
                e.open = checked;
              }
              return ele;
            })
            this.setState({
              hotData
            })
          }
    }
    render() {
        return (
            <div>
                
                {
                    this.state.switchKey === '1'?
                    <div initvalue = {weatherData} /> :
                    ''
                }
                <div>
                    <List 
                    onTabChange={::this.onTabChange}
                    onDataChange={::this.onDataChange}
                    initWindyValue={weatherData}
                    initHotValue={hotData}
                    />
                </div>
            </div>
        )
    }
}



let weatherData = [{
    id: 1,
    aniTag: 'vgrd',
    hmTag: 'ugrd',
    name: '风',
    icon: 'wa wa-wind',
    open: false,
    active: false,
    height: {
      10: '10m',
      30: '30m',
      50: '50m',
      100: '100m'
    }
  }, {
    id: 2,
    hmTag: 'tmp2m',
    name: '气温',
    open: false,
    active: false,
    icon: 'wa wa-qw'
  }, {
    id: 3,
    hmTag: 'pressfc',
    name: '气压',
    open: false,
    active: false,
    icon: 'wa wa-kpa'
  }, {
    id: 4,
    hmTag: 'tcdcclm',
    name: '云层',
    open: false,
    active: false,
    icon: 'wa wa-cloud'
  }, {
    id: 5,
    hmTag: 'rh2m',
    name: '湿度',
    open: false,
    active: false,
    icon: 'wa wa-wet'
  }, {
    id: 6,
    hmTag: 'albdosfc',
    name: '太阳光',
    open: false,
    active: false,
    icon: 'wa wa-sun'
  }, {
    id: 7,
    hmTag: '',
    name: '雨、雷',
    open: false,
    active: false,
    icon: 'wa wa-thunder'
  }, {
    id: 8,
    hmTag: '',
    name: '积雨',
    open: false,
    active: false,
    icon: 'wa wa-morerain'
  }, {
    id: 9,
    hmTag: '',
    name: '雷雨',
    open: false,
    active: false,
    icon: 'wa wa-leiyu'
  }, {
    id: 10,
    hmTag: '',
    name: '露点',
    open: false,
    active: false,
    icon: 'wa wa-ludian'
  }, {
    id: 11,
    hmTag: '',
    name: '海浪',
    open: false,
    active: false,
    icon: 'wa wa-hailang'
  }];
  
  
  //   赤潮
  let hotData = [{
    id: 1,
    aniTag: 'vgrd',
    hmTag: 'ugrd',
    name: '风',
    icon: 'wa wa-wind',
    open: false,
    active: false,
    height: {
      10: '10m',
      30: '30m',
      50: '50m',
      100: '100m'
    }
  }, {
    id: 2,
    hmTag: 'tmp2m',
    name: '气温',
    open: false,
    active: false,
    icon: 'wa wa-qw'
  }, {
    id: 3,
    hmTag: 'pressfc',
    name: '气压',
    open: false,
    active: false,
    icon: 'wa wa-kpa'
  }, {
    id: 4,
    hmTag: 'tcdcclm',
    name: '云层',
    open: false,
    active: false,
    icon: 'wa wa-cloud'
  }, {
    id: 5,
    hmTag: 'rh2m',
    name: '湿度',
    open: false,
    active: false,
    icon: 'wa wa-wet'
  }, {
    id: 6,
    hmTag: 'albdosfc',
    name: '太阳光',
    open: false,
    active: false,
    icon: 'wa wa-sun'
  }, {
    id: 7,
    hmTag: '',
    name: '雨、雷',
    open: false,
    active: false,
    icon: 'wa wa-thunder'
  }, {
    id: 8,
    hmTag: '',
    name: '积雨',
    open: false,
    active: false,
    icon: 'wa wa-morerain'
  }, {
    id: 9,
    hmTag: '',
    name: '雷雨',
    open: false,
    active: false,
    icon: 'wa wa-leiyu'
  }, {
    id: 10,
    hmTag: '',
    name: '露点',
    open: false,
    active: false,
    icon: 'wa wa-ludian'
  }, {
    id: 11,
    hmTag: '',
    name: '海浪',
    open: false,
    active: false,
    icon: 'wa wa-hailang'
  }];