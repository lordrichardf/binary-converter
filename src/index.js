import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// components to build:
// Input Converter

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            value: ''
        };
        this.num = 0;
    }

    calculate(n){
        let total = 0;
        
        for (let i = 0; i < n.length; i++) {
            if (Number(n[i]) > 1 || Number(n[i]) < 0) {
                total = null;
                alert('enter a binary number!')
            } 
            total *= 2
            total += Number(n[i])
        }
        // for each iteration, multiply the current total by 2, and add the current binary digit
        return total;
    }

    handleInput(event) {
        this.setState({ value: event.target.value });
        this.num = event.target.value;
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleInput}></input>
                <div>
                    <h1>{this.num > 0 ? this.num : null}</h1>
                    <h1>{this.num > 0 ? this.calculate(this.num) : null}</h1>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>Binary to decimal</h3>
                <UserInput />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

