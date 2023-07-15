import React, { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { sendContactForm } from "services";

const Contact = ({ showOverlay, onClose }) => {
  
  const formRef = useRef();

  if (!showOverlay) return null;

  const submitContact = async (e) => {
    e.preventDefault();
    console.log(e);
    const res = await sendContactForm({
      name: e.target[0].value,
      email: e.target[1].value,
      comment: e.target[2].value,
    });
    if (res == 0) {
        toast.success('Message submitted successfully!');
      formRef.current.reset();
    } else {
        toast.error('Message submitted successfully!');
    }
  };

  return (

      <div className="container max-w-2xl text-center">
       
        <div>
          <form
            ref={formRef}
            onSubmit={submitContact}
          >
            <input
              required
              placeholder="Name*"
              type={"text"}
              minLength={3}
              maxLength={25}
              className="px-4 py-2 border border-gray-300 rounded"
            />
            <input
              required
              placeholder="Email Address*"
              type={"email"}
              className="px-4 py-2 border border-gray-300 rounded"
            />
            <textarea
              required
              placeholder="Comment*"
              rows={5}
              className="px-4 py-2 border border-gray-300 rounded"
></textarea>
            <button type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
  );
};

export default Contact;