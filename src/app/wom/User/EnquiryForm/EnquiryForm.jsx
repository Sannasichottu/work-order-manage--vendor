import React from "react";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import { TextField } from "@mui/material";
// import { Link } from "react-router-dom";

// import "reactjs-popup/dist/index.css";
// import PopupForm from "./PopupForm";
import { useState } from "react";
import { FormControl, Grid,  MenuItem, Select, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

const EnquiryForm = () => {
  // const [seen, setSeen] = useState(false);
  // const year = [
  //   "2024",
  //   "2023",
  //   "2022",
  //   "2021",
  //   "2020",
  //   "2019",
  //   "2018",
  //   "2017",
  //   "2016",
  //   "2015",
  //   "2014",
  //   "2013",
  //   "2012",
  //   "2011",
  //   "2010",
  // ];
  // const model = [
  //   "Kia",
  //   "Hyundai",
  //   "Maruti",
  //   "Tata",
  //   "Mahindra",
  //   "Toyota",
  //   "Honda",
  //   "Skoda",
  //   "BMW",
  //   "Audi",
  // ];
  // const part = [
  //   "Engine",
  //   "Tire",
  //   "Steering",
  //   "Gear Lever",
  //   "Gas Pedal",
  //   "Suspension",
  //   "Oil Filter",
  //   "Battery",
  //   "Wiper",
  //   "Side Mirror",
  //   "Rearview",
  //   "Sun Visor",
  //   "Bumper",
  // ];
  // const area = [
  //   "All Area",
  //   "Chennai",
  //   "Knachipuram",
  //   "Madurai",
  //   "Dindigul",
  //   "Tirunelveli",
  //   "Virudhunagar",
  //   "Thoothukudi",
  //   "Tenkasi",
  //   "Kanniyakumari",
  //   "Tiruppur",
  //   "Coimbatore",
  // ];
  // const distance = [
  //   "5km - 25km",
  //   "25km - 50km",
  //   "50km - 75km",
  //   "75km - 100km",
  //   "100km - 125km",
  //   "125km -150km",
  //   "150km - 175km",
  //   "175km - 200km",
  //   "200km above",
  // ];

  // function togglePop() {
  //   setSeen(!seen);
  // }
  const [year, setYear] = useState('');
  const [model, setModel] = useState('');
  const [make, setMake] = useState('');

  const handleChange = (event) => {
    setYear(event.target.value);
  };
  const handleChange1 = (event) => {
    setModel(event.target.value);
  };
  const handleChange2 = (event) => {
    setMake(event.target.value);
  };
  return (
    <div>
     <div className='text' style={{border:'4px solid black', padding:'40px', borderRadius:'10px', boxShadow:'5px 3px', margin:'80px'}}>
              {/* <h5>Car Engine</h5>
              <h4>Most Searched on TiT</h4>
              <p style={{textAlign:'justify'}}>We offer the best rates for car spare parts and provide a complete range of spare parts. Along with spare parts we have an exclusive range of car accessories. If you are looking for car accessories online then we are the one-stop shop for you. At Motrparts, we check every spare part and make sure that you receive the original and best quality spare parts. All the spare parts go under quality tests so that our end user gets the best spare parts online</p>

              <div className='button' ><NavLink to="/" style={{marginBottom:'200px'}} >Explore Now &#8599;</NavLink></div> */}
          <h4 style={{textAlign:'center', fontWeight:'650'}} >Recycle Engine Market</h4>
          <hr style={{marginTop:'3px'}} />
      <Grid container spacing={2.5} style={{marginTop:'2px'}} >
        <Grid item xs={12}>
          <Stack spacing={1}>
            {/* <InputLabel>Year</InputLabel> */}
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                displayEmpty
                id="demo-simple-select"
                value={year}
                placeholder="Year"
                onChange={handleChange}
              >
                <MenuItem disabled value="" sx={{ color: 'text.secondary' }}>
                  Select Year
                </MenuItem>
                <MenuItem value={2024}>2024</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2019}>2019</MenuItem>
                <MenuItem value={2018}>2018</MenuItem>
                <MenuItem value={2017}>2017</MenuItem>
                <MenuItem value={2016}>2016</MenuItem>
                <MenuItem value={2015}>2015</MenuItem>
                <MenuItem value={2014}>2014</MenuItem>
                <MenuItem value={2013}>2013</MenuItem>
                <MenuItem value={2012}>2012</MenuItem>
                <MenuItem value={2011}>2011</MenuItem>
                <MenuItem value={2010}>2010</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            {/* <InputLabel>Year</InputLabel> */}
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                displayEmpty
                id="demo-simple-select"
                value={make}
                placeholder="Select Make"
                onChange={handleChange2}
              >
                <MenuItem disabled value="" sx={{ color: 'text.secondary' }}>
                  Select Make
                </MenuItem>
                <MenuItem value={"AMC"}>AMC</MenuItem>
                <MenuItem value={"Acura"}>Acura</MenuItem>
                <MenuItem value={"Alfa"}>Alfa</MenuItem>
                <MenuItem value={"Audi"}>Audi</MenuItem>
                <MenuItem value={"BMW"}>BMW</MenuItem>
                <MenuItem value={"Buick"}>Buick</MenuItem>
                <MenuItem value={"Ford"}>Ford</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            {/* <InputLabel>Year</InputLabel> */}
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                displayEmpty
                id="demo-simple-select"
                value={model}
                placeholder="Age"
                onChange={handleChange1}
              >
                <MenuItem disabled value="" sx={{ color: 'text.secondary' }}>
                  Select Model
                </MenuItem>
                <MenuItem value={"Ambassador"}>Ambassador</MenuItem>
                <MenuItem value={"American"}>American</MenuItem>
                <MenuItem value={"Amx"}>Amx</MenuItem>
                <MenuItem value={"Classic"}>Classic</MenuItem>
                <MenuItem value={"RDX"}>RDX</MenuItem>
                <MenuItem value={"RL"}>RL</MenuItem>
                <MenuItem value={"RSX"}>RSX</MenuItem>
                <MenuItem value={"147"}>147</MenuItem>
                <MenuItem value={"GTV6"}>GTV6</MenuItem>
                <MenuItem value={"Mito"}>Mito</MenuItem>
                <MenuItem value={"A3"}>A3</MenuItem>
                <MenuItem value={"A4"}>A4</MenuItem>
                <MenuItem value={"Q3"}>Q3</MenuItem>
                <MenuItem value={"R8"}>R8</MenuItem>
                <MenuItem value={"RS3"}>RS3</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          
        <div className="button" style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "16px",
                  backgroundColor: "#0e2a47",
                  border: "2px solid #0e2a47",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "#fff",
                  margin:'0'
                }}>
        <NavLink to="/dashboard/nomore/information">Submit</NavLink>
      </div>

      

          {/* <Popup
            trigger={
              <button
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "16px",
                  backgroundColor: "#0e2a47",
                  border: "2px solid #0e2a47",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "#fff",
                  margin:'0'
                }}
              >
                {" "}
                Submit
                             </button>
            }
            modal
            nested
          >
            {(close) => (
              <div style={{ height: "80vh", width:'63vw', }}>
                  <NoMoreInfor />
              </div>
            
            )}
          </Popup> */}

        </Grid>
      </Grid>


          </div>
    </div>
  );
};

export default EnquiryForm;
