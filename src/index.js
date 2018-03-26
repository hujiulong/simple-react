import React from './react'
import ReactDOM from './react-dom'

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//     return (
//         <div>
//             <Welcome name="Sara" />
//             <Welcome name="Cahal" />
//             <Welcome name="Edite" />
//         </div>
//     );
// }
//
// ReactDOM.render(
//     <App />,
//     document.getElementById( 'root' )
// );


class Welcome extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {};
    }
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
//
// class App extends React.Component {
//     constructor( props ) {
//         super( props );
//         this.state = {};
//     }
//     render() {
//         return (
//             <div>
//                 <Welcome name="Sara" />
//                 <Welcome name="Cahal" />
//                 <Welcome name="Edite" />
//             </div>
//         );
//     }
// }

class Counter extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            num: 0
        }
    }

    onClick() {
        this.setState( { num: this.state.num + 1 } );
    }

    componentDidUpdate() {
        console.log( 'update' );
    }

    componentDidMount() {
        console.log( 'mount' );
    }

    render() {
        return (
            <div onClick={ () => this.onClick()}>
                <Welcome name={this.state.num} />
                <Welcome name="Cahal" />
                <Welcome name="Edite" />
            </div>
        );
        return <h1 onClick={ () => this.onClick() }>Number: {this.state.num}</h1>;
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById( 'root' )
);
