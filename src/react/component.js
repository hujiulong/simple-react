import ReactDOM from '../react-dom'

class Component {
    constructor( props = {} ) {
        this.isReactComponent = true;

        this.state = {};
        this.props = props;
    }

    setState( stateChange ) {
        Object.assign( this.state, stateChange );
        if ( this._container ) {
            ReactDOM.render( this, this._container );
        }
    }
}

export default Component;
