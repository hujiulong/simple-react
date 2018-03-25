
class Component {
    constructor( props ) {
        this.state = {};
        this.props = props || {};
    }
    setState( stateChange ) {
        return Object.assign( this.state, stateChange );
    }
}
