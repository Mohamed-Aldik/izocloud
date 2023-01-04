import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Checkbox,
  FormControlLabel,
  Container,
} from "@mui/material";
import { useState } from "react";
import Drag from "./drag";

const Step2 = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };
  return (
    <Container maxWidth="lg">
      <Grid container my={3} spacing={3}>
        <Grid item xs={4}>
          <TextField fullWidth id="outlined-basic" label="Weight" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth id="outlined-basic" label="Custom Field1" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth id="outlined-basic" label="Custom Field2" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth id="outlined-basic" label="Custom Field3" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth id="outlined-basic" label="Custom Field4" variant="outlined" />
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Applicable Tax</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Applicable Tax"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Product Type*</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Product Type*"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>{" "}
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth id="outlined-basic" label="Exc. tax:" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth id="outlined-basic" label="Inc. tax:" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth id="outlined-basic" label="x Margin(%) " variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth id="outlined-basic" label="Exc. tax:" variant="outlined" />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox />}
            label="Enable Product description, IMEI or Serial Number"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel control={<Checkbox />} label=" Not for selling " />{" "}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel control={<Checkbox />} label=" Disable Woocommerce Sync " />{" "}
        </Grid>
        <Grid item xs={12}>
          <Drag />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Step2;
