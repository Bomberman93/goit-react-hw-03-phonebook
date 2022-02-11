import { Component } from "react";
import s from "./ContactForm.module.css"


class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number} = this.state;
    this.props.addToContacts(name, number);
    this.resetForm();
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.formContainer} onSubmit={this.handleSubmit}>
        <label className={s.lableContainerName}>
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
        <label className={s.lableContainerNumber}>
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
        <button type="submit" className={s.buttonAdd}>Add contact</button>
      </form>
    );
  }
}
export default ContactForm;