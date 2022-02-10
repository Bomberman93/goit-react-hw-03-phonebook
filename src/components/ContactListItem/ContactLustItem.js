import propTypes from "prop-types";
import PropTypes from "prop-types";

const ContactLustItem = ({ filterredContacts, contactDelete }) => {
  return filterredContacts.map((contact, index) => {
    return (
      <li key={contact.id} className="">
        {contact.name}: {contact.number}
        <button onClick={() => contactDelete(index)}>Delete</button>
      </li>
    );
  });
};

export default ContactLustItem;

ContactLustItem.propTypes = {
  contact: PropTypes.arrayOf(
    propTypes.shape({
      number: PropTypes.number,
      id: PropTypes.string,
      name: PropTypes.name,
    })
  ),
};
