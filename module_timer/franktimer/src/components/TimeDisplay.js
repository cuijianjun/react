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
            on:false,
            log:[]
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
    //记录时间
    handleLogTime = ()=> {
        this.state.log.push(this.state.time);
    }
    handleClearLog = ()=>{
        this.setState({log:[]})
    }
    handleReset = ()=>{
        this.setState({time:0})
    }
    render(){
        var time = format(this.state.time);
        return <div>
            <h1 className = "display-time">{time}</h1>
            <div className="controls">
                <Button className = {this.state.on ? "danger":"success"} text = {this.state.on ? "暂停":"开始"} onClick={this.handleToggle}/>
                <Button className="warning" text = "重置" onClick = {this.handleReset}/>
                <Button className="primary" text = "记录" onClick = {this.handleLogTime}/>
                <Button className="undefined" text = "清空" onClick = {this.handleClearLog}/>
            </div>
            <DisplayLog log ={this.state.log}/>
        </div>
    }
    //监听键盘事件
    componentDidMount(){
        window.addEventListener("keydown",e =>e.preventDefault());

        window.addEventListener("keyup",e =>{
            e.preventDefault();
            switch (e.keyCode){
                case 32:
                    this.handleToggle();
                    break;
                case 82:
                    this.handleReset();
                    break;
                case 13:
                    this.handleLogTime();
                    break;
                case 67:
                    this.handleClearLog();
                    break;
                default:
                    break;
            }
        });
    }
    //组件被移除，事件监听移除
    componentWillUnmount(){
        window.removeEventListener("keydown");
        window.removeEventListener("keyup");
    }
}

export default TimeDisplay;