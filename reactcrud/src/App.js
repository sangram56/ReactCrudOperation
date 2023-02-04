
import './App.css';
import Menu from './component/Menu';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Pnf from './component/Pnf';
import Update from './component/Update';
import Home from './component/Home';
import Create from './component/Create';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
      <ToastContainer autoClose={1000} position={"top-right"} />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/home`} element={<Home />} />
        <Route path={`/create`} element={<Create />} />
        <Route path={`/update/:id`} element={<Update />} />
        <Route path={`/*`} element={<Pnf />} />

      </Routes>

      
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
