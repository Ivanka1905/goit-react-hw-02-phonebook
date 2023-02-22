import ContactItem from 'components/ContactItem';

const Contacts = ({ contactsList, deleteContact }) => {
  return (
    <ul>
      {contactsList.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name.trim()}
          number={number}
          deleteContact={deleteContact}
          id={id}
        />
      ))}
    </ul>
  );
};

export default Contacts;
