import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validation = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter correct email adderss"),
    password: yup.string().required("Password is required"),
    confirm_password: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: validation,
    validateOnChange: false,
    onSubmit: (formData) => {
      // ON FORM SUBMIT CODE
    },
  });
  return (
    <>
      <Container sx={{ display: "grid", placeItems: "center", height: "100%" }}>
        <Paper
          sx={{
            p: "2rem",
            width: "max-content",
          }}
        >
          <form
            onSubmit={formik.handleSubmit}
            style={{
              minWidth: "10rem",
              maxWidth: "30rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Typography align="center" variant="h4">
              Signup Page
            </Typography>

            {/* Email Text Field */}
            <TextField
              fullWidth
              label="Email"
              name="email"
              id="email"
              type="text"
              placeholder="Email addresss"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
              helperText={formik.errors.email ? formik.errors.email : ""}
            />

            {/* Password Text Field */}
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.errors.password}
              InputProps={{
                endAdornment: (
                  <>
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </>
                ),
              }}
              helperText={formik.errors.password ? formik.errors.password : ""}
            />
            
            {/* Confirm Text Field */}
            <TextField
              fullWidth
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              error={formik.errors.confirm_password}
              InputProps={{
                endAdornment: (
                  <>
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </>
                ),
              }}
              helperText={
                formik.errors.confirm_password
                  ? formik.errors.confirm_password
                  : ""
              }
            />

            <Box sx={{ display: "flex", justifyContent: "end", mr: "10px" }}>
              <Link href="#" sx={{ align: "left", textDecoration: "none" }}>
                Already have account?
              </Link>
            </Box>

            <Button variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
}

export default SignUpScreen;
