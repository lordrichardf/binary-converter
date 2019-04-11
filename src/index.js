import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// components to build:
// Input Converter

let num = 0;

function calculate(n) {
    return n * 2;
}

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            value: ''
        };
    }

    handleInput(event) {
        this.setState({ value: event.target.value });
        num = event.target.value;
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleInput}></input>
                <div>
                    <h1>{num > 0 ? num : null}</h1>
                    <h1>{num > 0 ? calculate(num) : null}</h1>
                </div>
            </div>
        );
    }
}




class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>

                <UserInput />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

