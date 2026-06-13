import { Outlet } from "react-router-dom";
import NavBar from "../navBar/navBar";

export default function MainComp(){

  return <>
  <NavBar/>
  <Outlet/>
  </>
}