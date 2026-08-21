import Header from "./components/Header/Header"
import InputText from "./components/InputText/InputText"

function App() {
  return (
    <div>
      <Header>Dados do produto</Header>
      <InputText label="Nome" placeholder="Digite o nome do produto" />
      <InputText label="Preço" placeholder="Digite o preço do produto" />
    </div>
  )
}

export default App
