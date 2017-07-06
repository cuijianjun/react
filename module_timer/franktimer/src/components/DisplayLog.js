/**
 * Created by PPLU on 2017/7/5.
 */
import React,{Component} from 'react';
import format from '../utils/formatTime';
class DisplayLog extends Component{
    renderEmpty = () =>{
        return <span className="empty-log">空空如也...</span>;
    }
    renderLog = () =>{
        return this.props.log.map(function(item,i){
            return <li className="log-item">{format(item)}</li>
        });
    }
    render (){
        const log = this.props.log.length === 0 ? this.renderEmpty() : this.renderLog();
        return <ul className = "log">
            {log}
        </ul>
    };
}
export  default DisplayLog;
