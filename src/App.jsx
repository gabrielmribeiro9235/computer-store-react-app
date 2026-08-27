import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import Section from "./components/Section/Section"
import { useState } from "react"

function App() {
  const [products, setProducts] = useState([]);
  const sections = [
    {
      name: "Computadores",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9"
    },
    {
      name: "Acessórios",
      primaryColor: "#82cffa",
      secondaryColor: "#e8f8ff"
    },
    {
      name: "Impressoras",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e2"
    },
    {
      name: "Games",
      primaryColor: "#e06b69",
      secondaryColor: "#fde7e8"
    },
    {
      name: "Gadgets",
      primaryColor: "#8b6fd1",
      secondaryColor: "#f0ecfa"
    }
  ];

  return (
    <div>
      <Header>Dados do produto</Header>
      <Form products={products} setProducts={setProducts} sections={sections.map(section => section.name)} />

      {sections.map(section => (
        <Section
          key={section.name}
          name={section.name}
          primaryColor={section.primaryColor}
          secondaryColor={section.secondaryColor}
          products={products.filter(product => product.section === section.name)}
        />
      ))}
    </div>
  )
}

export default App
