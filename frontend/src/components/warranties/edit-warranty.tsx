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
  SelectChangeEvent,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AuthSessionStatus from "@/components/AuthSessionStatus";
import Stack from "@mui/system/Stack";
import FocusTrap from "@mui/base/FocusTrap";
import Iconify from "../iconify";

const EditWarranty = () => {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
        <NextLink href="/warranties" passHref>
          <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
            Return To List Warranties
          </Button>
        </NextLink>
        <AuthSessionStatus className="mb-4" status={status} />
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ my: 3 }}>
            <Typography color="textPrimary" variant="h4">
              Edit Warranty
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Edit Warranty
            </Typography>
          </Box>
          <TextField
            error={Boolean(formik.touched.email && formik.errors.email)}
            fullWidth
            helperText={formik.touched.email && formik.errors.email}
            label="Warranty name*"
            margin="normal"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            value={formik.values.email}
            variant="outlined"
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={7}
            placeholder="Description"
            style={{ padding: "15px", width: "100%", marginTop: "10px", borderRadius: "10px" }}
          />
          <Box sx={{ my: 1, width: "100%", display: "flex", gap: "15px" }}>
            <TextField fullWidth label="Duration*" id="fullWidth" />
            <FormControl fullWidth sx={{}}>
              <InputLabel htmlFor="grouped-select">Time Zone</InputLabel>
              <Select defaultValue="" id="grouped-select" label="Grouping">
                <MenuItem value={1}>Days</MenuItem>
                <MenuItem value={2}>Months</MenuItem>
                <MenuItem value={2}>Years</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ py: 2 }}>
            <Button
              startIcon={<Iconify icon="eva:plus-fill" />}
              color="success"
              disabled={formik.isSubmitting}
              fullWidth
              size="large"
              variant="contained"
            >
              Edit Warranty
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default EditWarranty;
