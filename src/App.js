import React from 'react';

class App extends React.Component {
    state = {
        count: 0
    }

    add = () => {
        console.log("add");
        this.setState(current => ({count: current.count + 1}));
    }
    minus = () => {
        console.log("minus");
        this.setState(current =>({count: current.count -1}));
    }

    // Execute when component started
    componentDidMount() {
        console.log("Component rendered");
    }
    // Execute when component updated
    componentDidUpdate() {
        console.log("Component updated");
    }
    // Execute when component goes away
    componentWillUnmount() {
        console.log("Component unmounted");
    }

    render() {
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default App;
