import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Loginpage from './Pages/Loginform/Loginpage';
import Header from "./Components/Header"
import Register from './Pages/Loginform/Register'



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Register />} />
   <Route exact path="/login" element={<Loginpage />} />
   <Route path="/home" element={<Header />} />
   
   
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
