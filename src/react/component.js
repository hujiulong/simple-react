class Component {
    constructor( props = {} ) {
        this.isReactComponent = true;

        this.state = {};
        this.props = props;
    }

    setState( stateChange ) {
        return Object.assign( this.state, stateChange );
    }
}

export default Component;
