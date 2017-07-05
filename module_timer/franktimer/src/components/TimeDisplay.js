/**
 * Created by PPLU on 2017/7/5.
 */
import React from 'react';
import  DisplayLog from './DisplayLog';
import Button from './Button';
import format from '../utils/formatTime';

class TimeDisplay extends React.Component{
    //构造函数对状态赋初始值
    constructor(props){
        super(props);
        this.state = {
            time:0,
            on:false
        };
    }
    //开始按钮
    handleToggle = ()=>{//箭头函数直接指向外部的作用域
        if(this.state.on){
            clearInterval(this.timer)
        }else{
            this.timer = setInterval(()=>{
                this.setState({time:this.state.time +1});
                console.log("timer");
            },10);
        }

        this.setState({on:!this.state.on})

    }
    render(){
        var time = format(this.state.time);
        return <div>
            <h1 className = "display-time">{time}</h1>
            <div className="controls">
                <Button className="success" text = {this.state.on ? "暂停":"开始"} onClick={this.handleToggle}/>
                <Button className="warning" text = "重置"/>
                <Button className="primary" text = "记录"/>
                <Button className="undefined" text = "清空"/>
            </div>
            <DisplayLog/>
        </div>
    }
}

export default TimeDisplay;