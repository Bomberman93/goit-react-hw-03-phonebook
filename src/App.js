import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addToContacts = (name, number) => {
    const { contacts } = this.state;
    const result = contacts.find((contact) => {
      return contact.name === name;
    });
    if (result) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  contactDelete = (index) => {
    this.setState((prevState) => {
      const newContacts = prevState.contacts.filter((_, idx) => idx !== index);
      return { contacts: newContacts };
    });
  };

  filterForm = (event) => {
    const query = event.target.value;
    this.setState({ filter: query });
  };

  getFilteraddContacts() {
    const { contacts, filter } = this.state;
    if (filter === "") {
      return contacts;
    }
    const filterredContacts = contacts.filter((contact) => {
      const filterStr = filter.toLowerCase();
      const contactStr = contact.name.toLowerCase();
      const compareResult = contactStr.includes(filterStr);
      return compareResult;
    });
    return filterredContacts;
  }

  render() {
    const filterredContacts = this.getFilteraddContacts();
    const elements = filterredContacts.map((contact, index) => {
      return (
        <li key={contact.id} className="">
          {contact.name}: {contact.number}
          <button onClick={()=>this.contactDelete(index)}>Delete</button>
        </li>
      );
    });
    return (
      <div className="">
        <div className="">
          <h1 className="">Phonebook</h1>
          <ContactForm addToContacts={this.addToContacts} />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter filterForm={this.filterForm} />
          <ul className="">{elements}</ul>
        </div>
      </div>
    );
  }
}

export default App;
