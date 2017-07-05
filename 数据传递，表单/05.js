/**
 * Created by PPLU on 2017/7/5.
 */
var MyComponent = React.createClass({
    getDefaultProps:function(){
        return {
            position:100,
            time:16
        };
    },
    getInitialState:function(){
        return {position:0};
    },
    render:function(){
        var style = {
            color:'red',
            marginLeft:this.state.position
        };
        return <div style={style}>This will animated</div>
    },
    transformComponent:function(){
        if(this.state.position<this.props.position){
            this.setState({
                position:++this.state.position
            });
        }else{
            clearInterval(this.timer)
        }
    },
    //渲染完成
    componentDidMount:function(){
      this.timer =   setInterval(this.transformComponent,this.props.time);
    }
})

ReactDOM.render(<MyComponent position={500}></MyComponent>,document.body)