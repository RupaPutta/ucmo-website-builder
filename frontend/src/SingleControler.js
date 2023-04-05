import React, { Component } from 'react';

export default class SingleControler extends Component {
    state = {
      show: true,
      selectedValue: '',
      color: '',
      isColored: false
    }

  componentDidMount(){
    this.setState({
      isColored: this.props.stay
    })
  }

  componentDidUpdate(prevProp){
    if(this.props !== prevProp){
      let selected = this.props.selected;
      let all = this.props.elements;

      selected.forEach(el => {
        all.filter(e => {
            if(el === e && this.state.isColored){
                this.setState({
                  color: e,
                })
            } 
            return null;
        })
      })
    }
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    let { show, color } = this.state;
    
    let classes = show ? "col-3 fas fa-1x fa-angle-up align-self-center" : "col-3 fas fa-1x fa-angle-down align-self-center";
    return (
      <div className="mx-2 my-1 border-bottom">
      <div className="row mx-auto text-light my-2">
        <h5 className="col-9">{this.props.name}</h5> 
        <i style={{cursor: 'pointer'}} className={classes} onClick={() => this.handleClick()}></i>
      </div>
      {
        show ?
        (
          <div className="row mx-auto my-0">
            {
              this.props.elements.map((el, index) => {
              return(
              <div className="col-6 text-center" key={index}>
                <p className={color === el ? 'bg-danger border border-danger rounded py-0 py-md-1' : 'text-light border border-light rounded py-0 py-md-1'} style={{cursor: 'pointer'}} onClick={() => this.props.componentFun(this.props.name, el)}>
                  {el}
                </p>
              </div>
              )
              })
            }
          </div>
        )
        :
        ''
      }
      </div>
    )
  }
}
