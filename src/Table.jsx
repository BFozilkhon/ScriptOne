import React, { Component } from 'react'

export default class Table extends Component {

    constructor(props){
        super(props)

        this.state = {
         count: 0   
        }
    }


    shouldComponentUpdate(){
        console.log(this.state.count);
        console.log('shouldComponentUpdate');
        return false
    }

    render() {
        console.log('render');
    return (
      <div>
 
         <h1>Hello</h1>

         <span>{this.state.count}</span>
         <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>

      </div>
    )
  }

}


// 1.componentWillMount -> renderdan tepada, constructordan pastda
// 2.componentDidMount -> renderdan pastda, eng ohirida joylashadi