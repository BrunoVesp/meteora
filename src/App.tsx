import Cabecalho from "./components/Cabecalho";
import Carrosel from "./components/Carrosel";
import Rodape from "./components/Rodape";
import SecaoBombando from "./components/SecaoBombando";
import SecaoCategoria from "./components/SecaoCategoria";
import SecaoEmail from "./components/SecaoEmail";
import SecaoFacilidades from "./components/SecaoFacilidades";
import { CarrinhoProvider } from "./contexts/CarrinhoContext";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <>
      <CarrinhoProvider>

        <ModalProvider>
          <Cabecalho />
          <Carrosel />
          <SecaoCategoria />
        </ModalProvider>

        <ModalProvider>
          <SecaoBombando />
        </ModalProvider>
        
      </CarrinhoProvider>

      <SecaoFacilidades />

      <ModalProvider>
        <SecaoEmail />
      </ModalProvider>

      <Rodape />
    </>
  )
}

export default App;
