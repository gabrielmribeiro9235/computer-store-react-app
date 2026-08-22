import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import { useState } from "react"

function App() {
  const [products, setProducts] = useState([]);
  const sections = [
    {
      name: "Computadores",
      primaryColor: "#57c278",
      secundaryColor: "#d9f7e9"
    },
    {
      name: "Acessórios",
      primaryColor: "#82cffa",
      secundaryColor: "#e8f8ff"
    },
    {
      name: "Impressoras",
      primaryColor: "#a6d157",
      secundaryColor: "#f0f8e2"
    },
    {
      name: "Games",
      primaryColor: "#e06b69",
      secundaryColor: "#fde7e8"
    },
    {
      name: "Gadgets",
      primaryColor: "#8b6fd1",
      secundaryColor: "#f0ecfa"
    }
  ];

  return (
    <div>
      <Header>Dados do produto</Header>
      <Form products={products} setProducts={setProducts} sections={sections.map(section => section.name)} />
    </div>
  )
}

export default App
