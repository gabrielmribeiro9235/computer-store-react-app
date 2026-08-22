import "./DropDown.css";

const DropDown = ({ label, value, items, setValue }) => {
    const handleSelection = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className="drop-down">
            <label htmlFor={label}>{label}</label>
            <select id={label} value={value} onChange={handleSelection}>
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default DropDown;