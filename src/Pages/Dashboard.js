import React from "react";
import {useSelector} from "react-redux";
import Navbar from "../Components/Navbar";


const Dashboard = () => {

  console.log("Userdetails", useSelector(st => st.userReducer))

  return (
    <Navbar />
  )



}

export default Dashboard;
