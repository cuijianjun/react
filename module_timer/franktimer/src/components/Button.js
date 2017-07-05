/**
 * Created by PPLU on 2017/7/5.
 */
import React from 'react';
class Button extends React.Component{
    getDefaultProps(){
        return {
            onClick :null,
            className:'',
            text:''
        };
    }
    render(){
        return <button className={`button ${this.props.className}`} onClick = {this.props.onClick}>
            {this.props.text}
        </button>;
    }
}
export  default Button;