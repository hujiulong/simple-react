import render from '../react-dom/render'

class Component {
    constructor( props = {} ) {
        this.isReactComponent = true;

        this.state = {};
        this.props = props;
    }

    setState( stateChange ) {
        Object.assign( this.state, stateChange );
        if ( this._container ) {
            render( this, this._container, this.ref );
        }
    }
}

export default Component;
