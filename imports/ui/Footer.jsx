import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-black/80 h-[70px] flex items-center justify-center px-8">
        <span className="text-white text-lg">Meteor Wallet {new Date().getFullYear()}</span>
    </footer>
  );
};
