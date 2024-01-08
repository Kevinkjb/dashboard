import Dictionary from './pages/Dictionary';
import Header from './components/Header';
import './index.css';
import Customers from './pages/Customers';
import Employees from './pages/Employees';
import Definition from './components/Definition';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './components/NotFound';


const  App = ()  => {
  return(
    <>
    <BrowserRouter>
      <Header>
        <Routes>
            <Route path="/employees" element={<Employees />}/>
            <Route path="/customers" element={<Customers />}/>
            <Route path="/dictionary" element={<Dictionary />}/>
            <Route path="/definition/:search" element={<Definition />}/>
            <Route path="/404" element={<NotFound/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </Header>
    </BrowserRouter>


    </>
  )
}

export default App
