import React from 'react';
import Hobby from './Hobby';
export default class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state={
            talk:'来自state',
            liked:0,
            hobbies:['篮球','电子游戏1']
        };
        (function (_this) {
            setTimeout(function () {
                _this.setState({
                    liked:100
                })
            },1000)
        })(this);
        this.likedCallBack=this.likedCallBack.bind(this);
        this.handTouchStart=this.handTouchStart.bind(this);
        this.handTouchMove=this.handTouchMove.bind(this);
        this.handTouchEnd=this.handTouchEnd.bind(this);
    }

    likedCallBack(){
        let liked=this.state.liked;
        liked++;
        this.setState({
            liked:liked
        });
    }
    handTouchStart(event,ev){//this.refs.btn,event,ev
        event.preventDefault();
       console.log('start',event.changedTouches[0].pageY)
        var startY=event.changedTouches[0].pageY;
        this.setState({
            startY:startY
        });
        this.refs.btn.addEventListener('touchmove',this.handTouchMove,false);
        this.refs.btn.addEventListener('touchend',this.handTouchEnd,false);
        //return false;
    }
    handTouchMove(event,ev){
        //ev.preventDefault();
        //console.log(ev,ev.changedTouches[0].pageX,ev.changedTouches[0].pageY)
    }
    handTouchEnd(event,ev){
        //ev.preventDefault();
        console.log('end',event.changedTouches[0].pageY)
        var endY=event.changedTouches[0].pageY;
        //alert(this.state.startY-endY)
        if(this.state.startY-endY>100){
            alert('上拉')
        }else if(endY-this.state.startY>100){
            alert('下拉!')
        }
        //this.refs.btn.removeEventListener('touchmove',this.handTouchMove,false);
        //this.refs.btn.removeEventListener('touchend',this.handTouchEnd,false);
    }

    render(){
        return(
            <div className="profile-component" >
                <div ref="btn" onTouchStart={this.handTouchStart} style={{position:'absolute',left:0,top:0,background:'#ccc',zIndex:2,width:'100%',height:'100%'}}></div>
                <h1>My name is {this.props.name}</h1>
                <h2>我今年{this.props.age}岁</h2>
                <h3>{this.state.talk}</h3>
                <h4>点赞次数{this.state.liked}</h4>
                <button onClick={this.likedCallBack}>给我点赞</button>
                <button >handTouchStart</button>
                <div>
                    <br/>
                    我的爱好:
                    <ul>
                        {this.state.hobbies.map(    (hobby,i)=><Hobby key={i} hobby={hobby}/>  )}
                    </ul>
                </div>
            </div>
        )
    }
}