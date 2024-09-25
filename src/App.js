import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./style.scss"
import {
    BrowserRouter, Navigate,
    Route,
    Routes,
} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
function App() {

    const { currentUser } = useContext(AuthContext) // get user info with useContext from AuthContext

    const ProtectedRoute = ({ children }) => { // with children prop means, this function can get prop as a component.
        if(!currentUser){
            return <Navigate to="/login" />
        }

        return children // if it is currentUser, redirect to the Home page which comes as a prop.
    }

  return (
      <BrowserRouter>
        <Routes>
          <Route index element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />
          <Route path="login" element={ <Login /> } />
          <Route path="register" element={ <Register /> }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
