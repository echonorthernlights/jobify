import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {Home, About, Register, Login, Stats, DashboardLayout ,HomeLayout, Landing} from "./pages"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children : [
      {
        index : true ,
        element : <Landing/>
      },
     {
    path: 'register',
    element: <Register/>,
  },
  {
    path: 'login',
    element: <Login/>,
  },
  
 {
    path: 'about',
    element: (
      <About/>
    ),
  }, 
  {
    path: 'dashboard',
    element: (
      <DashboardLayout/>
    ),
    children : [
      {
        path: 'stats',
        element: (
          <Stats/>
        ),
      }, 
    ]
  }, 
    ]
  }, 
  
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;