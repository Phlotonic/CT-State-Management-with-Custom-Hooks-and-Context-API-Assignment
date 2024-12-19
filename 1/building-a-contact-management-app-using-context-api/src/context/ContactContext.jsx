import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create the context
const ContactContext = createContext();

// Create a provider component
const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Tyler Durden', email: 'tyler@fightclub.com', phone: '123-456-7890' },
    { id: 2, name: 'Robert Paulson', email: 'rpaulson@fightclub.com', phone: '987-654-3210' }
  ]);

  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
      {children}
    </ContactContext.Provider>
  );
};

// Add prop types validation
ContactProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContactContext, ContactProvider };
