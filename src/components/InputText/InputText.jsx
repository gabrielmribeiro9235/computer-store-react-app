import "./InputText.css";

const InputText = ({ label, placeholder, value, setValue }) => {
    const handleOnChange = (event) => {
        setValue(event.target.value);
    }

    return ( 
        <div className="input-text">
            <label>{label}</label>
            <input placeholder={placeholder} value={value} type="text" onChange={(event) => handleOnChange(event)} />
        </div>
     );
}
 
export default InputText;