import React, { useState, useRef } from "react";
import { useGlobalState, setGlobalState } from '../store'
import { ToastContainer, toast } from 'react-toastify';
import { GiCancel } from "react-icons/gi";
import { allServices } from '../constants/index';

import 'react-toastify/dist/ReactToastify.css';
import { sendContactForm } from "../services";

const Contact = ({ showOverlay, onClose }) => {
  
  const formRef = useRef();

  if (!showOverlay) return null;

  const submitContact = async (e) => {
    e.preventDefault();

    const res = await sendContactForm({
      name: e.target[0].value,
      email: e.target[1].value,
      service: e.target[2].value,
      comment: e.target[3].value,
    });

    if (res == 0) {
        await toast.success('Message submitted successfully!');
        formRef.current.reset();
    } else {
        await toast.error('Oops something went wrong!');
    }
  };

  return (

    <div className="fixed inset-0 flex items-center justify-center z-50 pb-10 bg-black bg-opacity-50">
    <div className="overlay-content w-1/2">
      <div className="bg-gray-50 bg-opacity-95 text-black p-10 rounded-sm">
        <GiCancel
          size={40}
          className="text-yellow-400 absolute top-2 right-2 cursor-pointer"
          onClick={onClose}
        />
        <form className="flex flex-col space-y-4"
          ref={formRef}
          onSubmit={submitContact}>
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border border-gray-300 rounded"
          />
          <select
            name="services"
            className="px-4 py-2 border border-gray-300 rounded text-gray-400"
          >
            {allServices.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Message"
            className="px-4 py-2 border border-gray-300 rounded"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer
        className="toastify-container"
        toastClassName="toastify-toast"
        bodyClassName="toastify-body"
        position="top-center"
      />
    </div>
  </div>
  );
};

export default Contact;