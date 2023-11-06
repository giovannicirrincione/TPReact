import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ABM from "../pages/ABM";
import Administracion from "../pages/Administracion";

const AppRoutes:React.FC = () =>{
    return(
        <Routes>
            <Route path ="/" element={<HomePage/>}/>
            <Route path ="/administracion" element={<Administracion/>}/>
            <Route path = "/ABM" element={<ABM/>}/>
        </Routes>
    )
}

export default AppRoutes;