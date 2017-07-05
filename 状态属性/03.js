/**
 * Created by PPLU on 2017/7/2.
 */
    //子组件
class TextComponent extends React.Component {
    render (){
        return <div>Hello {this.props.text}!</div>;
    }
}
//父组件
var WrapperComponent = React.createClass({
    //state初始化
    getInitialState:function(){
        return {text:''}
    },
    //内容改变回调
    handleChange:function(e){
        this.setState({text:e.target.value});
    },
    render:function(){
        return <div>
            <TextComponent text = {this.state.text}/>
            <input type="text" onChange = {this.handleChange}/>
        </div>
    }
});
ReactDOM.render(<WrapperComponent/>,document.getElementById("myDiv"));