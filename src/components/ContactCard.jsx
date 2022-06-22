import React from "react";
import useFetch from "react-fetch-hook";

const ContactCard = ({ contactList }) => {
  return (
    <>
      {contactList?.map((contact, index) => (
        <figure key={index} className="bg-[#0a192f] h-80 rounded0-lg shadow-md pt-7">
          <img
            alt="user"
            className="w-32 h-32 rounded-full mx-auto"
            src={contact.picture.large}
          />
          <figcaption className="text-center mt-5">
            <p className="text-indigo-700 font-bold text-xl mb-2">{contact.name.first} {contact.name.last}</p>
            <p className="text-gray-300">
              <span className="font-medium">Email: </span>
              {contact.email}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">Phone: </span>
              {contact.cell}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">City: </span>
              {contact.location.city}
            </p>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

export default ContactCard;
