import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Navbar from './layout/Navbar/Navbar'
import Container from '../src/layout/container/Container'
import Notification from './pages/Notification/Notification'
import Carrinho from './pages/Carrinho/Carrinho'
import Home from './pages/Home/Home'
import Footer from './layout/Footer/Footer'
import Edit from './pages/EditCompra/Edit'
import Compra from './pages/Compra/Compra'
import NewCompra from './components/NewCompra'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">

      <Routes>
        <Route exact path='/' element={<Home/>}> </Route>
        <Route  path='/Notification' element={<Notification/>}> </Route>
        <Route  path='/Carrinho' element={<Carrinho/>}> </Route>
        <Route path='/Edit/:id' element={<Edit/>}></Route>
        <Route path='/Compra/:id' element={<Compra/>}></Route>
        <Route path='/NewCompra/:id' element={<NewCompra/>}></Route>
      </Routes>

      </Container>
    <Footer/>
    </Router>
  )
}

export default App
