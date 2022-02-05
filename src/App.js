import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addTodo, changeTodo } from "./redux/store";

import { Container, MainHeader, Header } from "./App.styled";
// import ContactForm from "./Components/ContactForm";
// import ContactList from "./Components/ContactList";
// import Filter from "./Components/Filter";
// import useLocalStorage from "./utils/useLocalStorage";
// import filterContacts from "./utils/contactFilter";
import { todoSelector } from "./redux/todoSelector";

function App() {
  const todoList = useSelector(todoSelector);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  console.log(todoList);

  // const [contacts, setContacts] = useLocalStorage("contacts", []);
  // const [filter, setFilter] = useState("");

  // const handleAddContact = (contact) => {
  //   if (contacts.some((el) => el.name === contact.name)) {
  //     alert(contact.name + " is already in contacts");
  //     return;
  //   }
  //   setContacts((prevState) => [...prevState, contact]);
  // };

  // const handleDeleteContact = (event) => {
  //   setContacts(contacts.filter((contact) => contact.id !== event.target.id));
  // };
  // const handleFilterContact = (event) => {
  //   setFilter(event.target.value);
  // };
  // const filteredContacts = filterContacts(contacts, filter);

  // const todo = {
  //   id: '',
  //   text: '',
  // checked:false}
  const onInputChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = () => {
    dispatch(addTodo({ id: nanoid(), text: value, checked: false }));
  };
  const onChecked = (id) => {
    const finded = todoList.find((elem) => elem.id === id);
    dispatch(changeTodo({ ...finded, checked: !finded.checked }));
  };
  return (
    <Container>
      <input
        placeholder="Add something"
        value={value}
        onChange={onInputChange}
      />

      <button type="button" onClick={onSubmit}>
        Add todo
      </button>
      <h2>Todo List</h2>
      <ul>
        {todoList.map(({ id, text, checked }) => (
          <li key={id}>
            <span style={{ textDecoration: checked ? "line-through" : "none" }}>
              {text}
            </span>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onChecked(id)}
            />
          </li>
        ))}
      </ul>
      {/* <MainHeader>Phonebook</MainHeader> */}
      {/* <ContactForm addContact={handleAddContact}></ContactForm>
      <Header>Contacts</Header>
      <Filter filterValue={filter} onFilter={handleFilterContact} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      /> */}
    </Container>
  );
}

export default App;
