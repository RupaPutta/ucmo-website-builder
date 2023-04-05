import React from 'react';
import { Full, Small } from './compoents/NavBar';
import { Carousel , Centered, Gradient  } from './compoents/Headline';
import { Checkpoint, Images } from './compoents/Section';
import { Content, Cards } from './compoents/Article';
import { Text, Links } from './compoents/Footer';
import Controler from './Controler';

class App extends React.Component {

    state = {
      open: true,
      edit: false,
      all: new Map(),
      status: false,
      components: ['NavBar', 'Headline', 'Service', 'Courses', 'Footer'],
      final: '',
      displaySmallControler: false
    }

controlDashboard = (isOpen) => {

  isOpen = isOpen ? this.state.open : false;
        
  let controle = document.querySelector('.controle');
  let icon = document.querySelector('.controle i');
  let controlerSection = document.querySelector('.components-controler');

  let aside = document.querySelector('aside');
  let main = document.querySelector('main');

    if(window.innerWidth > 1250){
      if(isOpen){
      aside.style.display = 'flex';
      aside.style.flexFlow = 'column';
      aside.style.justifyContent = 'space-between';
      aside.style.alignItems = 'stretch';
      aside.style.width = '350px';
      aside.style.height = '100vh';
      aside.style.position  = 'absolute';
      aside.style.top = '0';
      aside.style.left = '0';
      controlerSection.style.overflow = 'auto';

      controle.style.position = 'absolute';
      controle.style.top = '50vh';
      controle.style.left = `${aside.clientWidth}px`;
      main.style.marginLeft = `${aside.clientWidth}px`;

      icon.classList = '';
      icon.className = 'fas fa-caret-left fa-1x px-2 py-4 bg-light';
    } else {
      aside.style.display = 'none';
      main.style.marginLeft = '0px';
      main.style.display = 'block';

      controle.style.position = 'absolute';
      controle.style.top = '50vh';
      controle.style.left = '0px';

      icon.classList = '';
      icon.className = 'fas fa-caret-right fa-1x px-2 py-4 bg-light';
    }
    
  } 
  else {

    let icon = document.querySelector('small-controler-btn i');

    if(isOpen){
      aside.style.display = 'flex';
      aside.style.flexFlow = 'column';
      aside.style.justifyContent = 'center';
      aside.style.alignItems = 'center';
      aside.style.width = '100vw';
      aside.style.height = '100vh';
      aside.style.position = 'absolute';
      aside.style.top = '0';
      aside.style.left = '0';
      aside.style.right = '0';
      aside.style.bottom = '0';

      controlerSection.style.overflow = 'auto';
      main.style.display = 'none';

      if(icon){
        icon.classList = '';
        icon.style.className = 'fas fa-times';
      }
    
    } else {
      aside.style.display = 'none';
      main.style.display = 'block';
      main.style.marginLeft = '0px';

      if(icon){
        icon.classList = '';
        icon.style.className = 'fas fa-caret-up';
      }
      
    }
  }

}

  componentDidMount(){
    this.controlDashboard();
    window.addEventListener('resize', () => {
      this.controlDashboard();
      this.setState({
        open: true
      })
    });
  }


  controleClick = (open) => {
    this.controlDashboard(open); 
    this.setState({
      open: !open
    })
  }

  componentName = (element, value) => {
    let { all } = this.state;

    this.setState({
      edit: true,
    })
   
    if(element){
      all.set(element, value);
      this.setState({
        final: this.renderComponents()
      }) 
    }
  }

  view = () => {
    let { all, components } = this.state;
    let next = false;
    
    for(let key of all.keys()){
      for(let el of components){
        if(key === el){
          this.state.components.splice(el, 1);
          this.setState({
            status: true
          });
          next = true;
        } 
      }   
    }
    
    if(next){
      return true
    } else {
      return false;
    }
  }

  component = (v) => {
    switch(v){
      case 'Full':
        return <Full key="N1" />
      case 'Small':
        return <Small key="N2" />
      case 'Carousel ':
        return <Carousel key="H1" />
      case 'Centered':
        return <Centered key="H2" />
      case 'Gradient ':
        return <Gradient key="H3" />
      case 'Content':
        return <Content key="S1" />
      case 'Cards':
        return <Cards key="S2" />
      case 'Checkpoint':
        return <Checkpoint key="C1" />
      case 'Images':
        return <Images key="C2" />
      case 'Text':
        return <Text key="F1" />
      case 'Links':
        return <Links key="F2" />
      default:
        return ''
    }
  }

  renderComponents = () => {
    let { all } = this.state;
    let Arr = [];
    
    all.forEach(el => Arr.push(this.component(el)))

    return Arr;
  }


  render(){
  let { open, edit, all, final } = this.state;

  return (
    <React.Fragment>
      <div className="small-controler-btn shadow border bg-light py-2 px-3 rounded-circle" onClick={() => this.controleClick(open)}>
        {
          !open ? <i className="fas fa-times"></i> : <i className="fas fa-caret-up"></i>
        }
      </div>
      <div className="controle border rounded shadow">
        <i className="fas fa-caret-right fa-1x px-1 bg-light" onClick={() => this.controleClick(open)}></i>
      </div>
      <Controler componentFun={this.componentName} done={() => this.controleClick(open)} next={this.view} selected={all} />
      <main>
        { 
          edit ?
          <React.Fragment>
            {
             final ? final.map(e => e) : ''
            }
          </React.Fragment>
          :
          <div id="start" className="bg-secondary text-center d-flex justify-content-center align-items-center">
            <h6 className="text-light mx-2">Click on the arrow button and start building the website.</h6>
          </div>        
        }
      </main>
    </React.Fragment>
    );
  }
}

export default App;
