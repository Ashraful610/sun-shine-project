import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';


function App() {
  return (
    <div className="w-full lg:h-max h-max bg-gradient-to-r from-cyan-500  to-teal-500 md:px-12 px-5 py-2">
       <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/home' element={<Home></Home>}/>
          <Route path='/signUp' element={<SignUp></SignUp>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
