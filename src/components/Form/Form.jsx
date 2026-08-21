import "./Form.css";
import InputText from "../InputText/InputText";

const Form = (props) => {
    return (
        <section className="formulario">
            <form>
                <InputText label="Nome:" placeholder="Digite o nome do produto" />
                <InputText label="Preço:" placeholder="Digite o preço do produto" />
            </form>
        </section>
     );
}

export default Form;