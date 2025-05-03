import React from 'react';
import { UserAuthForm } from './components/user-auth-form';

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-32">
      <h1 className="text-3xl font-semibold mb-8">Log In</h1>
      <section className="w-96">
        <UserAuthForm />
      </section>
    </div>
  );
};

export default page;
