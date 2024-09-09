import Cabecalho from "./components/Cabecalho";
import Carrosel from "./components/Carrosel";
import Rodape from "./components/Rodape";
import SecaoBombando from "./components/SecaoBombando";
import SecaoCategoria from "./components/SecaoCategoria";
import SecaoEmail from "./components/SecaoEmail";
import SecaoFacilidades from "./components/SecaoFacilidades";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <>
      <Cabecalho />
      <Carrosel />
      <SecaoCategoria />
      <ModalProvider>
        <SecaoBombando />
      </ModalProvider>
      <SecaoFacilidades />
      <SecaoEmail />
      <Rodape />

    </>
  )
}

export default App;
