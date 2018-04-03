import React from './react'
import ReactDOM from './react-dom'

// import { h, render } from 'preact';
//
// const ReactDOM = {
//     render
// }
//
// const React = {
//     createElement: h
// }

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
//
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
//
//
class Title extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {};
    }
    render() {
        return <h1>{this.props.content}</h1>;
    }
}

class Counter extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            num: 1
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
                <Title content="count:" />
                <div><Title content={ this.state.num } /></div>
            </div>
        );
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById( 'root' )
);
