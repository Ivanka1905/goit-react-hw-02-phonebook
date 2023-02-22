const Filter = ({filter, onChange}) => {
    return (
        <label>Find contact by name
        <input type="text" value={filter} onChange={onChange}></input></label>
    )
};

export default Filter;