import Component from './component.js'

function createElement( tag, attrs, ...children ) {

    return {
        tag,
        attrs,
        children
    }
}

export default createElement;
