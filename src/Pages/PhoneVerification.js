import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {validateOtp, verifyPhoneNumber} from "../Store/UserActions";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const PhoneVerification = props => {

  const [errorText, setErrorText] = useState("")

  const url = window.location.href;

  const arrSpl = url.split("/")

  const phone = arrSpl[arrSpl.length-1]


  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{

    dispatch(verifyPhoneNumber({
      phoneNumber: phone
    }, res => {
      alert("Otp has been sent")
    }, err => {

    }))

  }, [])


  const handleSubmit = event => {
    event.preventDefault()
    const otp = event.target[0].value;
    if(otp.length) {

      dispatch(validateOtp({
        phoneNumber:phone, otp
      }, res => {

        if(res?.data == "VALID_OTP") {
          navigate("/dashboard")
        }

      }, err => {

      }))

    } else {
      setErrorText("Please enter valid otp")
    }


  }


  return  <Box
    sx={{
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >

    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

      <p>Verify your phone number : {phone}</p>

      <p style={{
        color: "red"
      }}>{errorText}</p>

      <TextField
        margin="normal"
        required
        fullWidth
        id="otp"
        label="Enter otp"
        name="otp"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        // onClick={handleSubmit}
      >
        Validate
      </Button>

    </Box>
  </Box>



}

export default PhoneVerification;
