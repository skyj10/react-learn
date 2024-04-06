import './App.css';
import React from 'react'
import Son from './Son.js'
class App extends React.PureComponent {
  //新版本的 相当于vue3的组合式api
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     a: 'constructor'
  //   }
  // }
  state = {
    a: 0,
    b:1,
    c:{
      c1:123
    },
    show:true,
    inputValue:"",
    arrList : ['item1','item2','item3']
  }

   click(params) {
    console.log(this);
    console.log(params);
  }

  addA=()=>{
    // this.state.a+=1; //不触发更新
    // console.log(this.state.a)
    // this.setState({ })//触发更新
     
    // this.setState({ //触发更新
    //   a:this.state.a
    // })
    this.setState({
      a:1,
      b:2,
      c:{
        c1:9
      },
      show:false
    })
  }
  handleList(){
    let listElement = [];
    this.state.arrList.forEach(element => {
      listElement.push(<div key={element}>{element}</div>)
    });
    return listElement
  } 
  addListItem = () => {
    let _arr = [...this.state.arrList];
    _arr.push(Math.random()*10+'item');
    this.setState({
      arrList:_arr
    })
  }

  render(){
    return <div className="App">
      <div onClick={this.click.bind(this,1)}>123</div>
      <div>{this.state.a}</div>
      <button onClick={this.addA}>修改a</button>
      <button onClick={this.addListItem}>修改list</button>

      {this.state.show?<div>show</div>:""}
      {this.state.show && <div>show</div>}
      {this.handleList()}
      {this.state.arrList.map((item) => {
        return <div key={item}>{item}</div>
      })}
      <input value={this.state.inputValue} onInput={(e) => {
        console.log(e.target.value)
        this.setState({inputValue:e.target.value})
      }}></input>
      <Son a={<div>name slot</div>}>
        <div>slot</div>
      </Son>
    </div>

  }

}

export default App;
