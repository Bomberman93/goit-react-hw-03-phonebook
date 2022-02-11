import React from 'react';
import PropTypes from "prop-types";

const ContactLustItem = ({ filterredContacts, contactDelete }) => {
  return filterredContacts.map((contact) => {
    return (
      <li key={contact.id} className="">
        {contact.name}: {contact.number}
        <button onClick={() => contactDelete(contact.id)}>Delete</button>
      </li>
    );
  });
};

export default ContactLustItem;

ContactLustItem.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
