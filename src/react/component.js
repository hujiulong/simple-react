import { renderComponent } from '../react-dom/diff'

class Component {
    constructor( props = {} ) {
        this.isReactComponent = true;

        this.state = {};
        this.props = props;
    }

    setState( stateChange ) {
        Object.assign( this.state, stateChange );
        renderComponent( this );
    }
}

export default Component;
