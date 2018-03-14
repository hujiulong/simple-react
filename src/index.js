function h( tag, attrs, ...children ) {
    return {
        tag,
        attrs,
        children
    }
}

const node = <div className="a">a <span></span></div>;

function render( vnode, container ) {

    if ( typeof vnode === 'string' ) {
        let textNode = document.createTextNode( vnode );
        return container.appendChild( textNode );
    }

    const dom = document.createElement( vnode.tag );

    if ( vnode.attrs ) {
        Object.keys( vnode.attrs ).forEach( key => {

            // http://www.jackpu.com/you-qu-de-hua-ti-wei-shi-yao-jsxyong-classnameer-bu-shi-class/
            // https://groups.google.com/forum/#!topic/reactjs/xovHWHGHPCA
            if ( key === 'className' ) key = 'class';

            dom.setAttribute( key, vnode.attrs[ key ] )
        } );
    }

    vnode.children.forEach( child => render( child, dom ) );

    return container.appendChild( dom );
}

render( node, document.getElementById( 'root' ) );
