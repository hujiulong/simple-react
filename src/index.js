import React from './react'
import ReactDOM from './react-dom'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            num: 0
        }
    }
    componentDidMount() {
        for ( let i = 0; i < 100; i++ ) {
            this.setState( prevState => {
                console.log( prevState.num );
                return {
                    num: prevState.num + 1
                }
            } );
        }
    }
    componentDidUpdate() {
        console.log( 'update' )
    }
    render() {
        return (<div className="App">
            <h1>{this.state.num}</h1>
        </div>);
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);
