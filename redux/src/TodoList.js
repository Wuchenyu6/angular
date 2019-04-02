import React, { Component } from 'react';
import store from './store';
// import {add_todo} from './actions/item';
// import {connect} from 'react-redux';
class TodoList extends Component {
    constructor(){
        super();
        this.state={
            list:store.getState().todo.list
        };
        store.subscribe(()=>{
            this.setState({
                list:store.getState().todo.list
            })
        })
    }
    // handleAdd=(e)=>{
    //     if(e.keyCode===13){
    //         store.dispatch(add_todo(e.target.value))
    //         e.target.value='';
    //     }
    // }
    handleAdd=(e)=>{
        if(e.keyCode===13){
            store.dispatch({
                type:'add_item',
                value:e.target.value
            })
            e.target.value='';
        }
    }
    handleDel=(index,e)=>{
        // console.log(index);
        store.dispatch({
            type:'del_item',
            value:index
        })
    }

    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.handleAdd} autoFocus />
                <br/>
                <br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={index}>{item}<button onClick={this.handleDel.bind(this,index)} style={{marginLeft:'30px'}}>删除</button></li>
                        ))
                        // this.state.list.map((item, index) => (
                        //     <li key={index}>
                        //         {item}
                        //     </li>
                        // ))

                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;
