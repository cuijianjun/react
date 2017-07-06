/**
 * Created by PPLU on 2017/7/5.
 */
import React from 'react';
class Button extends React.Component{
    //静态属性给属性赋默认值
    static defaultProps = {
        onClick :null,
        className:'',
        text:'默认'
    }
    render(){
        return <button className={`button ${this.props.className}`} onClick = {this.props.onClick}>
            {this.props.text}
        </button>;
    }
}
export  default Button;