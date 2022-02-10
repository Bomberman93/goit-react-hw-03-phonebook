import { Component } from "react";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    console.log(newContact);
    this.addToContacts(newContact);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  addToContacts = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  filterForm = (event) => {
    const query = event.target.value;
    this.setState({ filter: query });
  };

  render() {
    const { contacts, name, number } = this.state;
    const infoItemList = contacts
      .filter((c) => {
        if (!this.state.filter) return true;
        return !c.name.search(new RegExp(this.state.filter, "i"))
      })
      .map((contact) => {
        return (
          <li key={contact.id} className="">
            {contact.name}: {contact.number}
          </li>
        );
      });
    return (
      <div className="">
        <div className="">
          <h1 className="">Phonebook</h1>
          <form onSubmit={this.handleSubmit}>
            <label className="">
              Name
              <input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="">
              Number
              <input
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={this.handleChange}
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <div>
          <h2>Contacts</h2>
          Find contacts by name
          <input type="text" name="filter" onChange={this.filterForm} />
          <ul className="">{infoItemList}</ul>
        </div>
      </div>
    );
  }
}

export default App;
