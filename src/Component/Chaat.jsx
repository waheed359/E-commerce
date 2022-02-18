import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Popup from "../Pages/popup";
import ChatPopup from "../Pages/ChatPopup";
import { BiSend } from "react-icons/bi";
function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <div>
          <button className="open-button" onClick={togglePopup}>
            Chat
          </button>
        </div>
        {isOpen && (
          <ChatPopup
            content={
              <>
                <div>
                  <h2>Chat Messages</h2>

                  <div class="container1">
                    <p>Hello. How are you today?</p>
                    <span class="time-right">11:00</span>
                  </div>
                  <div class="container1 darker">
                    <p>Hey! I'm fine. Thanks for asking!</p>
                    <span class="time-left">11:01</span>
                  </div>
                  <div>
                    <div class="input-container">
                      <BiSend className="icon" />
                      <textarea
                        class="input-field"
                        type="text"
                        placeholder="Username"
                        name="usrnm"
                      />
                    </div>
                  </div>
                </div>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </>
  );
}

export default Chat;
