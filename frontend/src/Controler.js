import React, { Component } from 'react'
import SingleControler from './SingleControler'

const elements = [
  {
    name: 'NavBar',
    components: ['Full', 'Small']
  },
  {
    name: 'Headline',
    components: ['Carousel ', 'Centered', 'Gradient ']
  },
  {
    name: 'Service',
    components: ['Content', 'Cards']
  },
  {
    name: 'Courses',
    components: ['Checkpoint', 'Images']
  },
  {
    name: 'Footer',
    components: ['Text', 'Links']
  }
];

export default class Controler extends Component {

    state = {
      next: [],
      stay: false
    }

  nextComponent = (check, e) => {
    if(check){
      if(!this.props.next()){
        return;
      }
    }
      if(elements.length > 0){
        let all = [...this.state.next];
        all.push(elements.shift());
        this.setState({
          next: all,
          stay: true
        })
      }
      else {
        this.props.done();
        e.target.className = 'd-none';
      }
  }

  componentDidMount(){
    this.nextComponent(false);
  }

  render() {
    let { next, stay } = this.state;
    return (
    <aside className="bg-dark text-light">
    <div className="text-center components-controler">
      <h5 className="logo shadow p-2 text-uppercase">Site Builder</h5>
      <span>Get your website ready with just few clicks.</span>
      <hr className="bg-light my-2" />
      <div className="text-left">
        { 
        (elements.length >= 0)
        ? 
        next.map((el, index) => <SingleControler key={index} name={el.name} elements={el.components} componentFun={this.props.componentFun} selected={this.props.selected} stay={stay} />)
        : 
        ''
        }

      </div>
    </div>

    <div className="mt-1 mt-md-2 mt-lg-3 py-1 text-center controler-bootom-area">
      <p className="my-1">
        {elements.length > 0 ? 'Press the button for next component.' : 'Congrats! Your website is ready.'}
      </p>
      <button className="btn btn-light btn-sm d-block mx-auto w-75 align-self-center" 
      onClick={(e) => this.nextComponent(true, e)}
      >
        {elements.length > 0 ? 'Next' : "Let's Finish"}
      </button>
        <small className="py-2">Designed by UCMO Course Project Spring 2023 (ASE)</small>
    </div>
  </aside>
    )
  }
}
