/**
 * Created by PPLU on 2017/7/4.
 */
//不可控组件
/*var FormComponent = React.createClass({
    handleSubmit:function(e){
        e.preventDefault();
        var text = this.refs.input_name.value;
        alert(text);
    },
    render:function(){
        return <form onSubmit= {this.handleSubmit}>
            <input type="text" ref= "input_name" defaultValue = "Hello..."/><br/>
            <button type= "submit">提交</button>
        </form>;
    }
});*/
//可控组件(mvvm data binding)
//把数据储存在状态中state（通过事件监听）
var FormComponent = React.createClass({
    getInitialState:function(){
      return {text:""};
    },
    handleSubmit:function(e){
        e.preventDefault();
        alert(this.state.text);
    },
    handleChange:function(e){
      this.setState({text:e.target.value});
    },
    render:function(){
        return <form onSubmit= {this.handleSubmit}>
            <input type="text" defaultValue = "Hello..." onChange={this.handleChange}/><br/>
            <button type= "submit">提交</button>
        </form>;
    }
});
ReactDOM.render(<FormComponent></FormComponent>,document.body);