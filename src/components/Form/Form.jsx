import "./Form.css";
import InputText from "../InputText/InputText";
import DropDown from "../DropDown/DropDown";
import Option from "../Option/Option";
import Button from "../Button/Button";
import { useState } from "react";

const Form = ({ products, setProducts, sections }) => {
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
    const [price, setPrice] = useState(0);
    const [selectedStatus, setSelectedStatus] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (section && brand && name && price && selectedStatus) {
            const newProduct = {
                section,
                brand,
                name,
                price,
                status: selectedStatus,
            };

            setProducts([...products, newProduct]);

            setSection(sections[0]);
            setBrand(brands[0]);
            setName("");
            setPrice(0);
            setSelectedStatus("");
        } else {
            alert(
                `Todos os campos devem ser preenchidos\n\nCampo(s) vazio(s):\n${!section ? "[Seção] " : ""}${!brand ? "[Marca] " : ""}${!name ? "[Nome] " : ""}${!price ? "[Preço] " : ""}${!selectedStatus ? "[Novo ou Usado] " : ""}`
            );
        }
    }

    return (
        <section className="formulario">
            <form onSubmit={handleSubmit}>
                <DropDown label="Seção:" items={sections} value={section} setValue={setSection} />
                <DropDown label="Marca:" items={brands} value={brand} setValue={setBrand} />
                <InputText label="Nome:" placeholder="Digite o nome do produto" value={name} setValue={setName} isCurrency={false} />
                <InputText label="Preço:" placeholder="R$ 0,00" value={price} setValue={setPrice} isCurrency={true} />
                <Option options={status} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
                <Button>Inserir Produto</Button>
            </form>
        </section>
     );
}

export default Form;