import React from "react";
import { ContactForm } from "./ContactForm";
import { ContactRecords } from "./ContactRecords";
import { Navbar } from "./Navbar";
import {Footer} from './Footer'
export const App = () => (
  <div>
    <Navbar />
    <main className="min-h-[calc(100vh_-_70px)] my-10">
      <ContactForm />
      <ContactRecords />
    </main>
    <Footer />
  </div>
);
