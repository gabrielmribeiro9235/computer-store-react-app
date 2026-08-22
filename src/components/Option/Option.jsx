import "./Option.css";

const Option = ({ options, selectedStatus, setSelectedStatus }) => {
    const handleOption = (event) => {
        setSelectedStatus(event.target.value);
    }

    return (
        <div className="option">
            {options.map(option => (
                <div key={option}>
                    <input id={option} name="option" type="radio" value={option} checked={selectedStatus === option} onChange={handleOption} />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    );
}

export default Option;