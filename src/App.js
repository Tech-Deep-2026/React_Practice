import React,{lazy} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import './index.css';
import Body from './Components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Cart from './Components/Cart';
import RestaurantMenu from './Components/RestaurantMenu';
// import Grocery from './Components/Grocery';

const Grocery = lazy(()=>import('./Components/Grocery'));


const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />
      },
      {
        path: "/grocery",
        element: <Grocery />,
        errorElement: <Error />
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
        errorElement: <Error />
      }
    ]
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);

