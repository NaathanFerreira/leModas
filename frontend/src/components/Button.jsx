import React from 'react'

export default props =>
    <button className={`btn btn-${props.color} ${props.bootstrap}`} onClick={() => props.callback()}>
        {props.children}
    </button>