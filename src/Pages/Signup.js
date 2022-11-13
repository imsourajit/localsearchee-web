import React from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Switch,
  TextField,
  Typography
} from "@mui/material";
import "./SignupPage.css";
import {useDispatch} from "react-redux";
import Box from "@mui/material/Box";
import {Facebook, Instagram, Twitter, WhatsApp} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {registerUser} from "../Store/UserActions";

const SignupPage = () => {
  const [isPromoter, setPromoter] = React.useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitBtnClick = event => {


    event.preventDefault();

    const form = document.getElementById("form");


    const params = {
      email : document.getElementById("email").value ?? "",
      password: "localsearchee",
      BusinessName: event.target[0].value ?? "",
      BusinessAddress: document.getElementById("bAddr").value ?? "",
      FullName:  event.target[2].value ?? "",
      PhoneNumber: document.getElementById("phoneNumber").value ?? "",
      IsPhoneVerified: false,
      Place: document.getElementById("place").value ?? "",
      Pincode:event.target[6].value ?? "",
      ServiceType: document.getElementById("service").value ?? "",
      CategoryName:event.target[8].value ?? "",
      gstin:document.getElementById("gstin").value ?? "",
      FacebookUrl:event.target[10].value ?? "",
      TwitterUrl:document.getElementById("turlc").value ?? "",
      InstagramUrl: event.target[12].value ?? "",
      WhatsAppUrl:document.getElementById("wurl").value ?? "",
      Website:event.target[14].value ?? "",
      ReferralCode:document.getElementById("refcode").value ?? "",
      IsEmailVerified:false,
      UserType: isPromoter ? "PROMOTER" : "BUSINESS",
      creationTime: new Date().getTime()}

    console.log("params", params)

    dispatch(registerUser(params, res=> {
      if(res?.data?.length) {
        navigate(`/phoneverification/${params.PhoneNumber}`)
      }

    }, err => {
      console.log(err)
    }))




  }

  const _handlePromoterSwitchChange = e => {
    setPromoter(e.target.checked)
  }

  return (
    <div className="container">
      <Grid container md={12} spacing={2}>
        <Grid md={4} className="md-grid-center">
          <div className="left-container">
            <h3 className="header-title">Welcome</h3>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Are you a promoter?</Typography>
              <Switch inputProps={{"aria-label": "ant design"}} onChange={_handlePromoterSwitchChange}/>
            </Stack>

            <Box component={"form"} onSubmit={onSubmitBtnClick} noValidate id={"form"}>
              <FormControl fullWidth className="form-element" margin={"dense"}>
                <InputLabel htmlFor="component-outlined">Bussiness name</InputLabel>
                <OutlinedInput
                  id="bname"
                  label="Business name"
                  inputProps={{
                    type: "text"
                  }}
                />
              </FormControl>
              <FormControl fullWidth className="form-element" margin={"dense"}>
                <InputLabel htmlFor="component-outlined">Bussiness Address</InputLabel>
                <OutlinedInput
                  id="bAddr"
                  label="Bussiness Address"
                  inputProps={{
                    type: "text"
                  }}
                />
              </FormControl>
              <FormControl fullWidth className="form-element" margin={"dense"}>
                <InputLabel htmlFor="component-outlined">Contact person name</InputLabel>
                <OutlinedInput
                  id="cname"
                  label="Contact person name"
                  inputProps={{
                    type: "text"
                  }}
                />
              </FormControl>
              <FormControl fullWidth className="form-element" margin={"dense"}>
                <InputLabel htmlFor="component-outlined">Phone number</InputLabel>
                <OutlinedInput
                  id="phoneNumber"
                  label="phone number"
                  inputProps={{
                    type: "phone"
                  }}
                />
              </FormControl>
              <FormControl fullWidth className="form-element" margin={"dense"}>
                <InputLabel htmlFor="component-outlined">Email</InputLabel>
                <OutlinedInput
                  id="email"
                  label="email"
                  inputProps={{
                    type: "email"
                  }}
                />
              </FormControl>

              <FormControl fullWidth className="form-element" margin={"dense"}>
                <InputLabel htmlFor="component-outlined">Place</InputLabel>
                <OutlinedInput
                  id="place"
                  label="Place"
                  inputProps={{
                    type: "text"
                  }}
                />
              </FormControl>
              <FormControl fullWidth className="form-element" margin={"dense"}>
                <InputLabel htmlFor="component-outlined">Pincode</InputLabel>
                <OutlinedInput
                  id="pin"
                  label="Pincode"
                  inputProps={{
                    type: "text"
                  }}
                />
              </FormControl>
              <FormControl fullWidth className="form-element" margin={"dense"}>
                <InputLabel htmlFor="component-outlined">Service type</InputLabel>
                <OutlinedInput
                  id="service"
                  label="Service type"
                  inputProps={{
                    type: "text"
                  }}
                />
              </FormControl>
              <FormControl fullWidth className="form-element" margin={"dense"}>
                <InputLabel htmlFor="component-outlined">Category name</InputLabel>
                <OutlinedInput
                  id="catname"
                  label="Category name"
                  inputProps={{
                    type: "text"
                  }}
                />
              </FormControl>
              <FormControl fullWidth className="form-element" margin={"dense"}>
                <InputLabel htmlFor="component-outlined">GSTIN</InputLabel>
                <OutlinedInput
                  id="gstin"
                  label="GSTIN"
                  inputProps={{
                    type: "text"
                  }}
                />
              </FormControl>

              <FormControl fullWidth className="form-element" margin={"dense"}>
                <div className={"social-row-input"}>
                  <Facebook color="primary" fontSize="large" className="social-icon"/>
                  <TextField fullWidth id="fburl" variant="standard" label={"Facebook"}
                    placeholder="https://www.facebook.com/"/>
                </div>
              </FormControl>

              <FormControl fullWidth className="form-element" margin={"dense"}>
                <div className={"social-row-input"}>
                  <Twitter color="primary" fontSize="large" className="social-icon"/>
                  <TextField fullWidth id="turlc" variant="standard" label={"Twitter"}
                    placeholder="https://www.twitter.com/"/>
                </div>
              </FormControl>

              <FormControl fullWidth className="form-element" margin={"dense"}>
                <div className={"social-row-input"}>
                  <Instagram color="primary" fontSize="large" className="social-icon"/>
                  <TextField fullWidth id="iurl" variant="standard" label={"Instagram"}
                    placeholder="https://www.instagram.com/"/>
                </div>
              </FormControl>

              <FormControl fullWidth className="form-element" margin={"dense"}>
                <div className={"social-row-input"}>
                  <WhatsApp color="primary" fontSize="large" className="social-icon"/>
                  <TextField fullWidth id="wurl" variant="standard" label={"Whatsapp"}
                    placeholder="Whatsapp registered phone number"/>
                </div>
              </FormControl>

              <FormControl fullWidth className="form-element" margin={"dense"}>
                <InputLabel htmlFor="component-outlined">Website</InputLabel>
                <OutlinedInput
                  id="websiteurl"
                  label="Website"
                  inputProps={{
                    type: "text"
                  }}
                />
              </FormControl>

              <FormControl fullWidth className="form-element" margin={"dense"}>
                <InputLabel htmlFor="component-outlined">ReferralCode</InputLabel>
                <OutlinedInput
                  id="refcode"
                  label="Referral Code"
                  inputProps={{
                    type: "text"
                  }}
                />
              </FormControl>


              <FormControl fullWidth className="form-element" margin={"dense"}>
                <Button variant="contained" color="primary" fullWidth type={"submit"}>
                                    Register
                </Button>
              </FormControl>

            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignupPage;
