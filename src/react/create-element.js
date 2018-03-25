import Component from './component.js'

function createElement( tag, attrs, ...children ) {

    console.dir( tag )

    // 类定义组件
    if ( tag.prototype &&  tag.prototype.render ) {
        return new tag( attrs );
    // 函数定义组件
    } else if ( typeof tag === 'function' ) {
        return tag( attrs || {} );
    }

    return {
        tag,
        attrs,
        children
    }
}

export default createElement;
