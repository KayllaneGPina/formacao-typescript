import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Components/Layout';
import Conta from './Pages/Conta';
import Home from './Pages/Home';
import ContaInfo from './Pages/ContaInfo';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/conta/:id' element={<Conta />}></Route>
            <Route path='/infoconta' element={<ContaInfo/>}></Route>
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
