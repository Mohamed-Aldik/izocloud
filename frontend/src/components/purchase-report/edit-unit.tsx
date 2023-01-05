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

const Editpurchases = () => {
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
        <NextLink href="/purchases" passHref>
          <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
            Return To List purchases
          </Button>
        </NextLink>
        <AuthSessionStatus className="mb-4" status={status} />
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ my: 3 }}>
            <Typography color="textPrimary" variant="h4">
              Edit purchases
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Edit purchases
            </Typography>
          </Box>
          <TextField
            error={Boolean(formik.touched.email && formik.errors.email)}
            fullWidth
            helperText={formik.touched.email && formik.errors.email}
            label="purchases name*"
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
            label="purchases Code"
            margin="normal"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            value={formik.values.email}
            variant="outlined"
            helperText="purchases code is same as HSN code"
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
                label=" Add as sub purchases"
              />
              {open && (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">parent purchases</InputLabel>
                  <Select
                    labelId="parent purchases:"
                    id="demo-simple-select"
                    value={age}
                    label="parent purchases"
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
              Edit purchases
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default Editpurchases;