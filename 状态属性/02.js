/**
 * Created by PPLU on 2017/7/2.
 */
var Text = React.createClass({
    //设置状态的初始值
    getInitialState:function(){
        return {
            isLike:false
        };
    },
    handleClick:function(){
        this.setState({isLike:!this.state.isLike});
    },
    render:function(){
        var text  = this.state.isLike?'喜欢':'不喜欢';
        return <p onClick = {this.handleClick}>你{text}吗?</p>
    }
})

ReactDOM.render(<Text/>,document.getElementById('myDiv'));