'use client';
import React, { useRef, useState } from 'react';
import {Input, Button } from "@nextui-org/react";
export function Subscribe() {
  const inputEl = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState('');

  const subscribe = async (e: any) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl?.current?.value,
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

    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <form onSubmit={subscribe}>
      <label htmlFor="email-input">{'Email Address'}</label>
      <input
        id="email-input"
        name="email"
        placeholder="id@domain.com"
        ref={inputEl}
        required
        type="email"
      />
      <div style={{fontSize:'smaller'}}>
        {message
          ? message
          : `* Promotion can only be claimed once per customer. Some restrictions may apply.`}
      </div>
      
        <Button type="submit" size="lg" color='primary' variant="flat" style={{marginTop: '5%'}} className=''>{'Subscribe'}</Button>
    </form>
  );
}