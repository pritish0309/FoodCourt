import './App.css';
import Home from './components/Home';
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Test from './components/Test';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <Test />,
  },
]);


function App() {
  return (
    <div className='app-container' id='running-app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
