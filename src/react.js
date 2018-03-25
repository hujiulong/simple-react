function createElement( tag, attrs, ...children ) {

    if ( typeof tag === 'function' ) {
        return tag( attrs || {} );
    }

    return {
        tag,
        attrs,
        children
    }
}

export default {
    createElement
}
