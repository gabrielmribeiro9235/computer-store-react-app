import "./Option.css";

const Option = (props) => {
    const handleOption = (event) => {
        props.setSelectedStatus(event.target.value);
    }

    return (
        <div className="option">
            {props.options.map(option => (
                <div key={option}>
                    <input name="option" type="radio" value={option} checked={props.selectedStatus === option} onChange={(event) => handleOption(event)} />
                    <label>{option}</label>
                </div>
            ))}
        </div>
    );
}

export default Option;