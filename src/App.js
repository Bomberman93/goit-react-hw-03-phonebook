import { Component } from "react";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      name: this.state.name,
      id: nanoid(),
    };
    this.addToContacts(newContact);
    // this.resetForm();
  };

  // resetForm = () => {
  //   this.setState({ ...this.state });
  //   console.log({ ...this.state });
  // }

  addToContacts = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };


  render() {
    const { contacts, name } = this.state;
    const infoItem = contacts.map((contact) => {
      return <li key={contact.id} className="">{contact.name}</li>;
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
            <button type="submit">Add contact</button>
          </form>
        </div>
        <div>
          <h1>Contacts</h1>
          <ul className="">
            {infoItem}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
