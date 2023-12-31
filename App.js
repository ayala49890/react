import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom"
import Login from './components/Login';
import Entery from './components/Entery';
import SighUp from './components/SighUp';

function App() {
  return <div className="App">

    <Routes>
    <Route path="/" element={<Entery/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SighUp/>}/>

        {/* <Route path='/home' element={<Home />} />
        <Route path='/userrecipes' element={<Recipes />} />
        <Route path='/allRecipes' element={<Recipes />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/addRecipe' element={<AddRecipe />} />
        <Route path='/addCategory' element={<Home />} /> */}
    </Routes>
    
   </div>
    

  
}

export default App;
