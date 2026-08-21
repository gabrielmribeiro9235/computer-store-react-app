import "./Form.css";
import InputText from "../InputText/InputText";
import DropDown from "../DropDown/DropDown";
import Option from "../Option/Option";
import Button from "../Button/Button";

const Form = (props) => {
    const sections = [
        "Computadores",
        "Acessórios",
        "Impressoras",
        "Games",
        "Gadgets"
    ];

    const brands = [
        "HP",
        "Dell",
        "Positivo",
        "Asus",
        "Xing Ling genérico",
    ];

    const status = [
        "Novo",
        "Usado"
    ];

    return (
        <section className="formulario">
            <form>
                <DropDown label="Seção:" items={sections} />
                <DropDown label="Marca:" items={brands} />
                <InputText label="Nome:" placeholder="Digite o nome do produto" />
                <InputText label="Preço:" placeholder="Digite o preço do produto" />
                <Option options={status} />
                <Button>Inserir Produto</Button>
            </form>
        </section>
     );
}

export default Form;