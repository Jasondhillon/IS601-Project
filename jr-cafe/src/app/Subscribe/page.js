
'use client';
import React, { useRef, useState } from 'react';
import {Input, Button } from "@nextui-org/react";
export default function Subscribe() {
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);
    console.log(form_values['email']);
    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: form_values['email'],
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <form onSubmit={subscribe}>
      <label htmlFor="email-input">{'Email Address'}</label>
      <input
        id="email-input"
        name="email"
        placeholder="id@domain.com"
        required
        type="email"
      />
      <div style={{fontSize:'smaller'}}>
        {message
          ? message
          : `* Promotion can only be claimed once per customer. Some restrictions may apply.`}
      </div>
      
        <Button  style={{margin: "7px",
    backgroundColor: "darkgray",
    width: "40%",
    height: "5vh", marginTop:'5%'}}    type="submit" size="lg" color='primary' variant="flat" className='rounded-full'>{'Subscribe'}</Button>
    </form>
  );
}