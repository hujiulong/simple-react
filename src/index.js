const React = {
    createElement
}

const ReactDOM = {
    render: ( vnode, container ) => {
        container.innerHTML = '';
        return render( vnode, container );
    }
}

function createElement( tag, attrs, ...children ) {
    return {
        tag,
        attrs,
        children
    }
}

function render( vnode, container ) {

    if ( typeof vnode === 'string' ) {
        let textNode = document.createTextNode( vnode );
        return container.appendChild( textNode );
    }

    const dom = document.createElement( vnode.tag );

    if ( vnode.attrs ) {
        Object.keys( vnode.attrs ).forEach( key => {

            if ( key === 'className' ) key = 'class';

            dom.setAttribute( key, vnode.attrs[ key ] )
        } );
    }

    vnode.children.forEach( child => render( child, dom ) );

    return container.appendChild( dom );
}

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      );
    ReactDOM.render(
        element,
        document.getElementById( 'root' )
    );
}

setInterval( tick, 1000 );
