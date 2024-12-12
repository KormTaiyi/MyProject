import { BrowserRouter ,Routes, Route } from "react-router-dom";
import MainLayoutLogin from "./components/layout/MainLayoutLogin"
import MainLayout from "./components/layout/MainLayout"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HistoryPage from "./pages/HistoryPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import RegisterPage from "./pages/RegisterPage";
import M_Reservation from "./pages/M_Reservation";

const App=()=>{
  return (
    <div style={{margin:"0",padding:"0"}}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/menu" element={<MenuPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/history" element={<HistoryPage/>}/>
            <Route path="/reservation" element={<M_Reservation/>}/>
            <Route path="*" element={<ErrorPage/>}/>

          <Route element={<MainLayoutLogin/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;