import React, {Component} from 'react'

class KeyPadComponent extends Component {
    render () {
        const {showScientificCalc} = this.props
        return (
            <div className="buttonWrapper">
                {showScientificCalc ? (
                <div>
                    <button style={{width: '50%'}} name="square" onClick={e => this.props.onClick(e.target.name)}>Square</button>
                    <button style={{width: '50%'}} name="root" onClick={e => this.props.onClick(e.target.name)}>Square Root (&#x0221A;)</button><br/>
                </div> ) : ''}

                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>Add (+)</button><br/>


                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>Subtract (-)</button><br/>

                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>Multiply (*)</button><br/>


                <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>Divide (/)</button><br/>
            </div>
        )
    }
}

export default KeyPadComponent;