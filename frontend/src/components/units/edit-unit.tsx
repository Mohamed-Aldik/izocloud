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

const EditUnit = () => {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
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
              Edit Unit
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Edit Unit
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
            type="email"
            value={formik.values.email}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Unit Code"
            margin="normal"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            value={formik.values.email}
            variant="outlined"
            helperText="Unit code is same as HSN code"
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={7}
            placeholder="Description"
            style={{ padding: "15px", width: "100%", marginTop: "10px", borderRadius: "10px" }}
          />
          <FocusTrap open={open} disableRestoreFocus disableAutoFocus>
            <Stack alignItems="start" spacing={2}>
              <FormControlLabel
                control={<Checkbox onChange={(e) => setOpen(e.target.checked)} checked={open} />}
                label=" Add as sub Unit"
              />
              {open && (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">parent Unit</InputLabel>
                  <Select
                    labelId="parent Unit:"
                    id="demo-simple-select"
                    value={age}
                    label="parent Unit"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
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
              Edit Unit
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default EditUnit;
