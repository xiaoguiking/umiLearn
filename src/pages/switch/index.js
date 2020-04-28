import React,{Component} from 'react';
import style from './style.css';
import classnames from 'clsssnames';
import List from './list';

export default class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            right: '0'
          };
    }

    handleClick() {
        this.setState(prevState => ({
        //   isToggleOn: !prevState.isToggleOn,
          isToggleOn: !prevState.isToggleOn,
        }));
      }

    render() { 
        // {hidden:!prevState.isToggleOn }
        return ( 
            <div>
                <button className={style.buttonBox} onClick={::this.handleClick}>
                {this.state.isToggleOn ? '更多' : '收起'}
                </button>
                <div className={classnames('style.switchBox', )} >
                </div>
                <List />
            </div>
        );
    }
}
 