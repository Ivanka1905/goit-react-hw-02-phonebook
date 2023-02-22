import ContactItem from 'components/ContactItem';

const Contacts = ({ contactsList }) => {

    return (<ul>
        {contactsList.map(({ id, name, number }) => (
            <ContactItem key={id} name={name.trim()} number={number}/>
        ))}
    </ul>)
};

export default Contacts;