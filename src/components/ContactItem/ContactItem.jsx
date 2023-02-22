const ContactItem = ({ name, number, deleteContact, id }) => {
  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
