import "./Form.css";
import InputText from "../InputText/InputText";
import DropDown from "../DropDown/DropDown";
import Option from "../Option/Option";
import Button from "../Button/Button";
import { useState } from "react";

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

    const [section, setSection] = useState(sections[0]);
    const [brand, setBrand] = useState(brands[0]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section className="formulario">
            <form onSubmit={(event) => handleSubmit(event)}>
                <DropDown label="Seção:" items={sections} value={section} setValue={setSection} />
                <DropDown label="Marca:" items={brands} value={brand} setValue={setBrand} />
                <InputText label="Nome:" placeholder="Digite o nome do produto" value={name} setValue={setName} />
                <InputText label="Preço:" placeholder="Digite o preço do produto" value={price} setValue={setPrice} />
                <Option options={status} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
                <Button>Inserir Produto</Button>
            </form>
        </section>
     );
}

export default Form;