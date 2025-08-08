
import { Routes, Route } from 'react-router';
import './App.css'
import Header from './components/Header/Header.jsx';
import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';


function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
