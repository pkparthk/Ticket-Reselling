import React from 'react';
import { Contact } from './components/contact-form';

const ContactPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-32">
      <h1 className="text-3xl font-semibold mb-8">Contact</h1>
      <section className="w-96 md:w-[500px]">
        <Contact />
      </section>
    </div>
  );
};

export default ContactPage;
