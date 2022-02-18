import React from 'react'

const ChatPopup = props => {

    
  return (
   
      <div className="chatbox">
        <span className="icon-x" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    
  )
}

export default ChatPopup