import React, {useEffect, useState} from "react";
import Navbar from "../Components/Navbar";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {useDispatch} from "react-redux";
import {getAllUsers} from "../Store/UserActions";
import {TableBody} from "@mui/material";


const Userslist = () => {

  const [users, setUsers] = useState([])

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getAllUsers({}, res => {

      console.log(res.data)

      setUsers(res.data)

    }, err => {

    }))

  }, [])




  return (
    <>
      <Navbar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>Full Name</b></TableCell>
              <TableCell align="right"><b>Email</b></TableCell>
              <TableCell align="right"><b>Business Name</b></TableCell>
              <TableCell align="right"><b>Business Address</b></TableCell>
              <TableCell align="right"><b>Referral Code</b></TableCell>
              <TableCell align="right"><b>Payout</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              users.map(item => {

                return (
                  <TableRow>
                    <TableCell>{item.FullName}</TableCell>
                    <TableCell align="right">{item.email}</TableCell>
                    <TableCell align="right">{item.BusinessName}</TableCell>
                    <TableCell align="right">{item.BusinessAddress}</TableCell>
                    <TableCell align="right">{(item.email.split("@"))[0]}</TableCell>
                    <TableCell align="right">{item.refers*40}</TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer></>
  )

}


export default Userslist
