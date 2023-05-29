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

function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const validation = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter correct email adderss"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validation,
    validateOnChange: false,
    onSubmit: (formData)=>{
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
              display:'flex',
              flexDirection:'column',
              gap:'1rem'
            }}
          >
            <Typography align="center" variant="h4">
              Login Page
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

            <Box sx={{ display: "flex", justifyContent: "end", mr: "10px" }}>
              <Link href="#" sx={{ align: "left" }}>
                Forget Password
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

export default LoginScreen;
