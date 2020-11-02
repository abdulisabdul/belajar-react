import React, { Component, Fragment } from "react";

export default class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    // untuk Fetch data dari api
    setTimeout(() => {
      console.log('componentDidMount')
      this.setState({counter: this.state.counter + 1})
    },3000)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      
      console.log('componentDidUpdate',prevState.counter)
    }
  }
  
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Life Cycle</h1>
              <span className="badge badge-primary">{this.state.counter}</span>
              {
                this.state.counter === 0 ?
                  <Unmount /> : null
              }
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

class Unmount extends Component{
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    return (
      <div>Unmount</div>
    )
  }
}


