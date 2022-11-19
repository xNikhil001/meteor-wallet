import React from "react";
import { ContactsCollection } from "../api/contacts";
import {useTracker} from 'meteor/react-meteor-data'

export const ContactRecords = () => {
  const contacts = useTracker(()=>ContactsCollection.find({}).fetch())
  return (
      <div className="my-8 p-10">
        {contacts.map((contact)=>{
            return <p key={contact._id} className="">{contact.name}</p>
        })}
      </div>
  );
};
