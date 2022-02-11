import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

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

  contactDelete = (contactId) => {
    this.setState((prevState) => {
      const newContacts = prevState.contacts.filter(
        (contact) => contact.id !== contactId
      );
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

  componentDidMount() {
    const contact = localStorage.getItem("contacts");
    const parsedTodos = JSON.parse(contact);
      this.setState({ contacts: parsedTodos });
  
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filterredContacts = this.getFilteraddContacts();
    return (
      <div className="">
        <div className="">
          <h1 className="">Phonebook</h1>
          <ContactForm addToContacts={this.addToContacts} />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter filterForm={this.filterForm} />
          <ContactList
            filterredContacts={filterredContacts}
            contactDelete={this.contactDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
