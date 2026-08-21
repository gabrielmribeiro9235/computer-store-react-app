import "./InputText.css";

const InputText = (props) => {
    const handleOnChange = (event) => {
        props.setValue(event.target.value);
    }

    return ( 
        <div className="input-text">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} value={props.value} type="text" onChange={(event) => handleOnChange(event)} />
        </div>
     );
}
 
export default InputText;