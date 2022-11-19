import React from "react";

export const ContactForm = () => {
  return (
    <form className="flex flex-col w-[200px] h-[250px] ml-10 bg-red-100 p-4">
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="name"
        className="border-b border-black bg-gray-100"
      />
      <label htmlFor="">Email</label>
      <input
        type="email"
        name="email"
        className="border-b border-black bg-gray-100"
      />
      <label htmlFor="">Image URL</label>
      <input
        type="url"
        name="image"
        className="border-b border-black bg-gray-100"
      />
      <button className="mt-8 bg-pink-300 w-6/12 mx-auto text-center py-1 rounded-sm">
        Sumbit
      </button>
    </form>
  );
};
