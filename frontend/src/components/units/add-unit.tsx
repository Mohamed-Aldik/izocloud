import NextLink from "next/link";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AuthSessionStatus from "@/components/AuthSessionStatus";
import Stack from "@mui/system/Stack";
import FocusTrap from "@mui/base/FocusTrap";
import Iconify from "../iconify";

const AddUnit = () => {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  const [agee, setAgee] = useState("");

  const handleChangee = (event: any) => {
    setAgee(event.target.value);
  };

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "demo@devias.io",
      password: "Password123",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      Router.push("/").catch(console.error);
    },
  });

  return (
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      <Container maxWidth="sm">
        <NextLink href="/units" passHref>
          <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
            Return To List Unit
          </Button>
        </NextLink>
        <AuthSessionStatus className="mb-4" status={status} />
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ my: 3 }}>
            <Typography color="textPrimary" variant="h4">
              Add Unit
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Add Unit
            </Typography>
          </Box>
          <TextField
            error={Boolean(formik.touched.email && formik.errors.email)}
            fullWidth
            helperText={formik.touched.email && formik.errors.email}
            label="Unit name*"
            margin="normal"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            value={formik.values.email}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Short name*"
            margin="normal"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            value={formik.values.email}
            variant="outlined"
          />

          <FormControl sx={{ my: 2 }} fullWidth>
            <InputLabel id="demo-simple-select-label">Allow decimal*</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={agee}
              label="Allow decimal*"
              onChange={handleChangee}
            >
              <MenuItem value={1}>Yes</MenuItem>
              <MenuItem value={0}>No</MenuItem>
            </Select>
          </FormControl>
          <FocusTrap open={open} disableRestoreFocus disableAutoFocus>
            <Stack alignItems="start" spacing={2}>
              <FormControlLabel
                control={<Checkbox onChange={(e) => setOpen(e.target.checked)} checked={open} />}
                label="Add as multiple of other unit "
              />
              {open && (
                <Box sx={{ my: 1, width: "100%", display: "flex", gap: "15px" }}>
                  <TextField fullWidth label="1 Unit	= " id="fullWidth" />
                  <FormControl fullWidth sx={{}}>
                    <InputLabel htmlFor="grouped-select">Base Unit</InputLabel>
                    <Select defaultValue="" id="grouped-select" label="Grouping">
                      <MenuItem value={1}>Days</MenuItem>
                      <MenuItem value={2}>Months</MenuItem>
                      <MenuItem value={2}>Years</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}
            </Stack>
          </FocusTrap>
          <Box sx={{ py: 2 }}>
            <Button
              startIcon={<Iconify icon="eva:plus-fill" />}
              color="success"
              disabled={formik.isSubmitting}
              fullWidth
              size="large"
              variant="contained"
            >
              Add Unit
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default AddUnit;
