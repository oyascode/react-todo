import React from 'react'

const Modal = ({title, children, close, closeText, action, actionText}) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <span className="modal-title">{title || "Modal title"}</span>
        </div>
        <div className="modal-body"  placeholder="Descripion" >
          {children || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium pariatur reiciendis laborum dolore ea a quibusdam ipsa dicta consectetur nulla."}
        </div>
        <div className="modal-footer">
          <button className="btn" type="button" onClick={close}>{closeText || "cancel"} place</button>
          <button className="btn" type="button" onClick={action}>{actionText || "save"} place</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
