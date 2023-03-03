export const ContactList = ({ contacts }) => {
  return (
    <ContactList>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}:{contact.number}
          </p>
        </li>
      ))}
    </ContactList>
  );
};
