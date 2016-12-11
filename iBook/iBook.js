import React from 'react';
import reactDOM from 'react-dom';
import {Hello} from './hellos';


//关于 Class 继承
class Promise {
    constructor(name,age){
        this.name=name;
        this.age=age;

    }

    speak(){
        return `我的名字叫${this.name},我今年${this.age}岁`;
    }
}
var mine=new Promise('王岩','24');
//alert(mine.speak());

class Yixiang extends Promise{

    talk(){
        return `${this.name}`
    }
}
var she=new Yixiang('liumangtu',1);
//alert(she.talk())
//alert(she.speak())
var props={
    name:'wangyan',
    age:24
}


reactDOM.render(
    <Hello {...props}/>,document.getElementById('app')
);
