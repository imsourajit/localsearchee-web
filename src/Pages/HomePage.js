import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getAllUsers, searchQuery} from "../Store/UserActions";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const Userslist = () => {

  const [users, setUsers] = useState([])

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getAllUsers({}, res => {


      setUsers(res.data)

    }, err => {

    }))

  }, [])


  const handleSearch = (event) => {

    event.preventDefault()

    const params = {
      bname:  event.target[0].value ?? "",
      place: document.getElementById("place").value ?? "",
      serviceType: document.getElementById("stype").value ?? "",
      pincode: document.getElementById("pincode").value ?? ""
    }

    let query = "";

    if(params.bname) {
      query= `WHERE BusinessName LIKE '%${params.bname}%'`
    }

    if(params.place) {
      query= `WHERE Place LIKE '%${params.place}%'`
    }

    if(params.serviceType) {
      query= `WHERE ServiceType LIKE '%${params.serviceType}%'`
    }

    if(params.pincode) {
      query= `WHERE Pincode LIKE '%${params.pincode}%'`
    }

    dispatch(searchQuery({
      query
    }, res => {
      setUsers(res.data)
      console.log(res)
    }, err=>{}))



  }



  return (
    <Box>

      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >

        <Box component="form" onSubmit={handleSearch} noValidate sx={{ mt: 1, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

          <TextField
            margin="normal"
            fullWidth
            id="bname"
            label="BusinessName"
            name="bname"
            sx={{
              margin: 3
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            id="place"
            label="Place"
            name="place"
            sx={{
              margin: 3
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            id="stype"
            label="Service Type"
            name="stype"
            sx={{
              margin: 3
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            id="pincode"
            label="Pin Code"
            name="pincode"
            sx={{
              margin: 3
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // onClick={handleSubmit}
          >
            Search
          </Button>

        </Box>
      </Box>

      <Box sx={{justifyContent: "center", alignItems: "center"}}>
        {users.map(item => {
          return (
            <Grid container spacing={2} sx={{background: "#eaeaea", margin: 10, padding: 3, width: "50%"}}>
              <Grid item xs={6} md={8} sx={{display: "flex", flex:1,flexDirection: "row", alignItems: "center"}}>
                <b>Business Name</b><p>{item.BusinessName}</p>

              </Grid>
              <Grid item xs={6} md={8} sx={{display: "flex", flex:1,flexDirection: "row", alignItems: "center"}}>
                <b>Business Address</b>
                <p>{item.BusinessAddress}</p>
              </Grid>
              <Grid item xs={6} md={8} sx={{display: "flex", flex:1,flexDirection: "row", alignItems: "center"}}>
                <b>Service Type</b>
                <p>{item.ServiceType}</p>
              </Grid>
              <Grid item xs={6} md={8} sx={{display: "flex", flex:1,flexDirection: "row", alignItems: "center"}}>
                <b>Category Name</b>
                <p>{item.CategoryName}</p>
              </Grid>
              <Grid item xs={6} md={8} sx={{display: "flex", flex:1,flexDirection: "row", alignItems: "center"}}>
                <b>Full Name</b>
                <p>{item.FullName}</p>
              </Grid>
              <Grid item xs={6} md={8} sx={{display: "flex", flex:1,flexDirection: "row", alignItems: "center"}}>
                <b>Phone Number</b>
                <p>{item.PhoneNumber}</p>
              </Grid>
              <Grid item xs={6} md={8} sx={{display: "flex", flex:1,flexDirection: "row", alignItems: "center"}}>
                <b>Email</b>
                <p>{item.email}</p>
              </Grid>
              <Grid item xs={6} md={8} sx={{display: "flex", flex:1,flexDirection: "row", alignItems: "center"}}>
                <b>Website</b>
                <p>{item.Website}</p>
              </Grid>
            </Grid>

          )

        })}
      </Box>
    </Box>
  )

}


export default Userslist
