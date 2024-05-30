import { Component } from 'react'

class ClassComponent extends Component {

    constructor(){
        super()
        this.count = 0;
        console.log("from constructor");
    }

    componentDidMount(){
        console.log("from componentDidMount");
    }

    componentDidUpdate(){
        console.log("from componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("from componentWillUnmount")
    }

    render() {
        return (
            <div>
                <h1>Class Component</h1>
                {this.count}
                <button onClick={() => this.setState(() => this.count++)}>Increment</button>
            </div>
        )
    }
}

export default ClassComponent
