import "./Option.css";

const Option = (props) => {
    return (
        <div className="option">
            {props.options.map(option => (
                <div key={option}>
                    <input name="option" type="radio" />
                    <label>{option}</label>
                </div>
            ))}
        </div>
    );
}

export default Option;