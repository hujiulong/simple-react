import { diff } from './diff'

function render( vnode, container, dom ) {
    return diff( dom, vnode, container );
}

export default render;
