/**
 * Created by PPLU on 2017/7/4.
 */
var FormComponent  = React.createClass({
    getInitialState:function(){
      return {
          username:"",
          gender:0,
          agree:true
      };
    },
    handleChange:function(key,e){
        // console.log(e.target.value);
        var obj={};
        obj[key] =e.target.value;
        this.setState(obj);
        console.log(obj);
    },
    handleSubmit:function(e){
        e.preventDefault();
        console.log(this.state);
    },
    render:function(){
        return <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">输入用户名：</label>
            <input type="text" id="username" onChange  = {this.handleChange.bind(this,'username')}/><br/>
            <label htmlFor="gender">请选择性别：</label>
            <select  id="gender" onChange  = {this.handleChange.bind(this,'gender')}>
                <option value="1">男</option>
                <option value="0">女</option>
            </select><br/>
            <label htmlFor="agree">是否同意：</label>
            <input type="checkbox" id = "agree" onChange  = {this.handleChange.bind(this,'agree')}/><br/>
            <button type = "submit">提交</button>
        </form>;
    }
});
ReactDOM.render(<FormComponent></FormComponent>,document.body);