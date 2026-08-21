import "./DropDown.css";

const DropDown = (props) => {
    const handleSelection = (event) => {
        props.setValue(event.target.value);
    }

    return (
        <div className="drop-down">
            <label>{props.label}</label>
            <select value={props.value} onChange={(event) => handleSelection(event)}>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default DropDown;