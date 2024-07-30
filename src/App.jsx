import Navbar from './components/Navbar';
import TodoL from './components/odol';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Calculator from './components/Calculator';
import './components/Calculator.css';
import Home from './components/home';
import Weather from './components/Weather';
import './components/Weather.css';
import  Dictionary  from './components/dictionary';
import './components/dictionary.css';




function App() {
  const router= createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/><Home/></>
    },
    {
      path: "/TodoList",
      element:<><Navbar/><TodoL/></>
    },
    {
      path: "/Calculator",
      element: <><Navbar/><Calculator/></>
    },
    {
      path: "/Weather",
      element: <><Navbar/><Weather/></>
    },
    {
      path: "/dictionary",
      element: <><Navbar/><Dictionary/></>
    }
  ])

return (
    <>
    <RouterProvider router={router}>
    </RouterProvider>
    </>
  )
}

export default App
