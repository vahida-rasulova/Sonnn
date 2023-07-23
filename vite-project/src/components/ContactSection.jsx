import React from "react";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

function ContactSection() {
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };
  const [formState, setFormState] = useState(initialForm);
  const { name, email, message } = formState;
  const [contactModal, setContactModal] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  const toggleContactModal = () => {
    if (name !== "" && email !== "") {
      setContactModal(!contactModal);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
    }, 1500);
    console.log(formState);
  };

  const handleOkButtonClick = () => {
    setContactModal(false);
    setFormState(initialForm);
  };

  return (
    <div className="form-section">
      <div className="container">
        <div className="contact-form">
          <form method="post" onSubmit={handleSubmit}>
            <div className="form-col">
              <div className="form-col1">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </label>
              </div>
              <div className="form-col1">
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </label>
              </div>
            </div>
            <label>
              Message
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                value={message}
                onChange={handleChange}
                placeholder="Write your message"
              ></textarea>
            </label>
            <button
              onClick={toggleContactModal}
              className="contactBtn"
              type="submit"
            >
             Send Message
            </button>
          </form>
        </div>
        {contactModal && (
          <div className="seccess_box">
            <div className="overlay-contact" onClick={toggleContactModal}></div>
            <div className="suc-box">
              <div className="sucses-icon">
                <AiFillCheckCircle />
              </div>
              <div className="box__text">Thank You!</div>
              <button
                onClick={handleOkButtonClick}
                className="contact-modal-btn"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactSection;