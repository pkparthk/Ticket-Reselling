'use client';

import { Button } from '@/components/ui/button';

export function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB_ACCESS_KEY,
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      e.target.reset(); // Reset the form fields
    }
  }

  return (
    <>
      <form className="text-lg grid gap-3" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="border rounded-xl px-4 py-2 md:col-span-2"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="email@example.com"
            className="border rounded-xl px-4 py-2 md:col-span-2"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            required
            rows="3"
            placeholder="Enter Message"
            className="border rounded-xl px-4 py-2 md:col-span-2"
          ></textarea>
        </div>
        <Button type="submit">Submit Form</Button>
        {/* <button type="submit">Submit Form</button> */}
      </form>
    </>
  );
}
