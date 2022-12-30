import Head from "next/head";
import NextLink from "next/link";
// import { useAuth } from "@/hooks/auth";
import Router, { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Facebook as FacebookIcon } from "../icons/facebook";
import { Google as GoogleIcon } from "../icons/google";
import { useEffect, useState } from "react";
import AuthSessionStatus from "@/components/AuthSessionStatus";

const Login = () => {
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const router = useRouter();

  // const { login } = useAuth({
  //   middleware: "guest",
  //   redirectIfAuthenticated: "/",
  // });
  const formik = useFormik({
    initialValues: {
      email: "test@test.test",
      password: "test@test.test",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      // login({
      //   email: formik.values.email,
      //   password: formik.values.password,
      //   remember: true,
      //   setErrors,
      //   setStatus,
      // });
      Router.push("/").catch(console.error);
    },
  });
  // useEffect(() => {
  //@ts-ignore
  //   if (router.query.reset?.length > 0 && errors.length === 0) {
  //     //@ts-ignore
  //     setStatus(atob(router.query.reset));
  //   } else {
  //     setStatus(null);
  //   }
  // });
  return (
    <>
      <Head>
        <title>Login | IzoCloud</title>
      </Head>
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
          <NextLink href="/register" passHref>
            <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
              Register Now
            </Button>
          </NextLink>
          <AuthSessionStatus className="mb-4" status={status} />
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Sign in
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Login with email address
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Don&apos;t have an account?{" "}
              <NextLink href="/register">
                {/* @ts-ignore */}
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  Sign Up
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
