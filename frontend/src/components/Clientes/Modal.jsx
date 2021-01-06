import React from 'react'
import './Modal.css'

export default props => {
    const outsideclick = event => {
        if(event.target.className === "modal-area") props.onClose()
    }
    return (
        <div className="modal-area" onClick = {outsideclick}>
            <div className="container">
                <div className="close-btn">
                    <button className="close" onClick = {() => props.onClose()}><strong>X</strong></button>
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}