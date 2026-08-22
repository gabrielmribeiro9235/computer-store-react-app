import "./InputText.css";

const InputText = ({ label, placeholder, value, setValue, isCurrency }) => {
    const handleOnChange = (event) => {
        if (!isCurrency) {
            setValue(event.target.value);
            return;
        }

        const onlyNumbers = event.target.value.replace(/\D/g, "");

        const newValue = Number(onlyNumbers) / 100;

        setValue(newValue);
    }

    const formattedValue = isCurrency
        ? new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
          }).format(value || 0)
        : value;

    return ( 
        <div className="input-text">
            <label>{label}</label>
            <input placeholder={placeholder} value={formattedValue} type="text" onChange={handleOnChange} />
        </div>
     );
}
 
export default InputText;