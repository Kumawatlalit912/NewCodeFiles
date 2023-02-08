import React from 'react'
import { useSelector } from 'react-redux';
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom';
import './App.scss';
import About from './compo/Header/About';
import Blog from './compo/Header/Blog';
import Home from './compo/Header/Home';
import Login from './compo/Header/Login';
import Logout from './compo/Header/Logout';
import Products from './compo/Header/Products';
import Profile from './compo/Header/Profile';
import ProtectedRoute from './compo/ProtecteRoute/protectedRoute';
const App = () => {
    const {isAuthenticated}=useSelector((state)=>state.root);
  return (
    <Router>
        <nav className='navigation'>
        <Link to ='/'>Home</Link>
        <Link to ='/products'> Products</Link>
        <Link to ='/login'>login</Link>
        <Link to ='/logout'>Logout</Link>
        <Link to ='/blog'>Blog</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/profile'>Profile</Link>
        </nav>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>     
            <Route path='/logout' element={<Logout />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/products' element={<Products />} />
            </Route>
        </Routes>
    </Router>
  )
}

export default App