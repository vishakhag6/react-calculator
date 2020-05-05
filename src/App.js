import React, { Component } from 'react';
import './App.scss';
import './App.css';

// import all components
import { KeypadComponent, ResultComponent } from './components';

class App extends Component {
  // state
  state = {
    result: '',
    showScientificCalc: false,
    currentTheme: 'dark',
    themes: {
      light: {
        'main-bg-color': '#fff',
        'btn-bg-color': '#f0f0f0',
        'btn-font-color': '#000'
      },
      dark: {
        'main-bg-color': '#000',
        'btn-bg-color': '#666',
        'btn-font-color': '#fff'
      }
    }
  }

  constructor(props) {
    super(props);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.toggleScientificCalc = this.toggleScientificCalc.bind(this);
  } 

  // click handler calculations
  clickHandler = (item) => {
    if (item === '=') {
      this.setState({
        result: eval(this.state.result)
      })
    } else if (item === 'C') {
      this.setState({
        result: ''
      })
    } else if (item === 'CE') {
      this.setState({
        result: this.state.result.slice(0, -1)
      })
    } else if (item === 'square') {
      this.setState({
        result: Math.pow(this.state.result, 2)
      })
    } else if (item === 'root') {
      this.setState({
        result: Math.sqrt(this.state.result)
      })
    } else {
      this.setState({
        result: this.state.result + item
      })
    }
  }

  componentDidMount () {
    this.setTheme()
  }

  // set theme initially
  setTheme = () => {
    const theme = this.state.themes[this.state.currentTheme]
    for (let key in theme) {
      const cssKey = `--${key}`
      const cssValue = theme[key]
      document.body.style.setProperty(cssKey, cssValue)
    }
  }
  
  // toggle theme
  toggleTheme () {
    if (this.state.currentTheme === 'light') {
      this.setState({
        currentTheme: 'dark'
      }, this.setTheme())
    } else {
      this.setState({
        currentTheme: 'light'
      }, this.setTheme())
    }
  }

  toggleScientificCalc () {
    this.setState({
      showScientificCalc: true
    })
  }

  render () {
    return (
      <div className="calculator">
        <div className="calculator__body">
          <div className="calculator__heading">Calculator</div>

          <div className="toggle__wrapper">
            <span className="btn" onClick={this.toggleScientificCalc}>Scientific Mode</span>  
            <span className="btn" onClick={this.toggleTheme}>Change Theme</span>  
          </div>

          <ResultComponent result={this.state.result} />
          <KeypadComponent showScientificCalc={this.state.showScientificCalc} onClick={this.clickHandler} />
        </div>
      </div>
    )
  }
}

export default App;
