
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/Container';
import Form from 'components/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import {Title} from 'App.styled';

 function App () {

    return (
      <Container>
        <Title>Phonebook</Title>
        <Form />
        <Title>Contacts</Title>
        <Filter  />
        <ContactList />
        <ToastContainer autoClose={2000} />
      </Container>
  );  
};

export default App;