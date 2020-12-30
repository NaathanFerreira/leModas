import React from 'react'

export default props =>
    <button className={`btn btn-${props.color} ${props.bootstrap} data-toggle=${props.dtoggle} data-target=${props.dtarget}`}>
        {props.children}
    </button>