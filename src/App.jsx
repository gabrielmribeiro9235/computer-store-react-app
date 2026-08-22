import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import { useState } from "react"

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <Header>Dados do produto</Header>
      <Form products={products} setProducts={setProducts} />
    </div>
  )
}

export default App
