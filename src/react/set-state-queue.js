import { renderComponent } from '../react-dom/diff'

const setStateQueue = [];
const renderQueue = [];

function defer( fn ) {
    return Promise.resolve().then( fn );
}

export function enqueueSetState( stateChange, component ) {

    if ( setStateQueue.length === 0 ) {
        defer( flush );
    }
    setStateQueue.push( {
        stateChange,
        component
    } );

    if ( !renderQueue.some( item => item === component ) ) {
        renderQueue.push( component );
    }
}

function flush() {
    let item, component;
    while( item = setStateQueue.shift() ) {

        const { stateChange, component } = item;

        if ( typeof stateChange === 'function' ) {
            if ( !component.prevState ) {
                component.prevState = Object.assign( {}, component.state );
            }

            Object.assign( component.state, stateChange( component.prevState, component.props ) );
            component.prevState = component.state;
        } else {
            Object.assign( component.state, stateChange );
        }

    }

    while( component = renderQueue.shift() ) {
        renderComponent( component );
    }

}
