/**
 * Created by PPLU on 2017/7/2.
 */
var ChildGenderSelect = React.createClass({
    render:function(){
        return <select onChange={this.props.handleSelectChange}>
            <option value="1">男</option>
            <option value="0">女</option>
        </select>;
    }
});

var ParentForm = React.createClass({
    getInitialState:function(){
        return {gender:0};
    },
    handleChange :function(e){
        this.setState({gender:e.target.value});
    },
    handleSubmit:function(e){
        e.preventDefault();
        //Ajax请求
    },
    render:function(){
        return <form onSubmit={this.handleSubmit}>
            <ChildGenderSelect handleSelectChange = {this.handleChange}></ChildGenderSelect>
            <button type="submit">提交</button>
        </form>;
    }
});
ReactDOM.render(<ParentForm></ParentForm>,document.body);
