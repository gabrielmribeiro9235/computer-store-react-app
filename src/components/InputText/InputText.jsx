import "./InputText.css";

const InputText = (props) => {
    return ( 
        <div className="input-text">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} type="text" />
        </div>
     );
}
 
export default InputText;