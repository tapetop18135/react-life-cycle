import React , {Component} from 'react'

class Foo extends Component{

  componentDidMount(){
    console.log('Foo componentDidMount')
  }

  componentWillReceiveProps(nextProps){
    console.log('Foo componentWillReceiveProps',nextProps)
  }

  componentWillUpdate(nextProps, nextState){
    console.log('Foo componentWillUpdate',nextProps)
  }
  componentWillUnmount(){
    console.log('Foo ComponentWillunmout')
  }

  render(){
    return(<div>Foo !</div>)
  }
}

class Bar extends Component{

  componentDidMount(){
    console.log('Bar componentDidMount')
  }

  componentWillReceiveProps(nextProps){
    console.log('Bar componentWillReceiveProps',nextProps)

  }


  render(){
    return(<div>Bar !</div>)
  }

}

export default class App extends Component {


 

  state = {
    div : true
  }

  componentDidMount(){
    console.log('App componentDidMount')
  }

  componentWillReceiveProps(nextProps){
    console.log('App componentWillReceiveProps',nextProps)
  }

  componentWillUpdate(nextProps,nextState){
    console.log('App componentWillUpdate',nextState )
  }

  componentDidUpdate(){
    console.log("App componentDidUpdate")
  }

  handelClick = () => {
    this.setState({div : !this.state.div})
    
  }
  showFoo = () => {
    let foo = <Foo  a={0} b={1} C={2}/>

    if(this.state.div){
      return <div>{foo}</div>
    }else{
      return <span>{foo}</span>
    }

  }

  render(){
    
    return (
      <div>
        <button onClick = {(e) => {return this.handelClick()}}>Click !</button>
        {this.showFoo()}
        <Bar {...this.state}/>
      </div>
    )
  }

}