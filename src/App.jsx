import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import { useState } from "react"

function App() {
  const [products, setProducts] = useState([]);
  const sections = [
      "Computadores",
      "Acessórios",
      "Impressoras",
      "Games",
      "Gadgets"
  ];

  return (
    <div>
      <Header>Dados do produto</Header>
      <Form products={products} setProducts={setProducts} sections={sections} />
    </div>
  )
}

export default App
