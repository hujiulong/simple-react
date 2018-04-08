import React from './react'
import ReactDOM from './react-dom'

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
            <div>
                <Title content="count:" />
                <Title content={this.state.num} />
                <button onClick={ () => this.onClick()}>add</button>
            </div>
        );
        return <h1 onClick={ () => this.onClick() }>Number: {this.state.num}</h1>;
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById( 'root' )
);
