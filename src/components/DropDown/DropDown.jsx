import "./DropDown.css";

const DropDown = ({ label, value, items, setValue }) => {
    const handleSelection = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className="drop-down">
            <label>{label}</label>
            <select value={value} onChange={(event) => handleSelection(event)}>
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default DropDown;