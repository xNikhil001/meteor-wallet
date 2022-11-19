import { Meteor } from "meteor/meteor";
import { ContactsCollection } from "../imports/api/contacts";

const insertContact = (contact) => ContactsCollection.insertAsync(contact)

Meteor.startup(() => {
  if (ContactsCollection.find({}).count() === 0) {
    [
      {
        name: "Nikhil",
        email: "naikn8113@gmail.com",
        image: "https://google.com",
      },
    ].forEach(insertContact)
  }
});
