import ContactLustItem from "../ContactListItem/ContactLustItem"

const ContactList = ({filterredContacts, contactDelete}) => {
    return ( <ul className=""><ContactLustItem filterredContacts={filterredContacts} contactDelete={contactDelete} /></ul> );
}
 
export default ContactList;