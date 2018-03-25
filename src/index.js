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

ReactDOM.render(
    <Welcome name="Jack" />,
    document.getElementById( 'root' )
);
