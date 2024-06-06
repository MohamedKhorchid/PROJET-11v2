import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home"
import Signin from "../src/pages/signin/Signin"
import User from "../src/pages/user/User"
import ErrorPage from "../src/pages/error/ErrorPage"
import Header from "./components/header/Header";
import Footer from "../src/components/footer/Footer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/sign-in" Component={Signin}></Route>
            <Route path="/user" Component={User}></Route>
            <Route path="*" Component={ErrorPage}></Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
