import Component from './component.js'

function createElement( tag, attrs, ...children ) {

    attrs = attrs || {};

    return {
        tag,
        attrs,
        children,
        key: attrs.key || null
    }
}

export default createElement;
