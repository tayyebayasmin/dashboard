import { Box, Button, IconButton, Input, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header/Header";
import CustomText from "../../components/CustomText/CustomText";
import { tokens } from "../../themes";
import { useRef } from "react";
import { AttachFile } from "@mui/icons-material";

const HelpPage = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    // console.log(values);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const uploadInputRef = useRef(null);

  return (
    <Box m="20px" ml={5}>
      <Header Title="Help" />
      <CustomText size="20px" text={"Need any Assistance?"} />
      <Box
        p="30px"
        m={2}
        width={500}
        sx={{
          backgroundColor: theme.palette.mode === "dark" ? "#1B0336" : "white",
          borderRadius: "12px",
        }}
      >
        <CustomText text={"Contact us"} size={"20px"} />

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="flex"
                p={2}
                flexDirection={"column"}
                justifyContent={"space-between"}
              >
                <TextIField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{
                    borderRadius: "8px",
                    mt: "10px",
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#28094A" : "#D8D8D9",
                  }}
                />
                <TextIField
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{
                    borderRadius: "8px",
                    mt: "10px",
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#28094A" : "#D8D8D9",
                  }}
                />
                <TextIField
                  variant="filled"
                  type="text"
                  label="Message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.message}
                  name="message"
                  multiline
                  rows={5}
                  error={!!touched.message && !!errors.message}
                  helperText={touched.message && errors.message}
                  sx={{
                    borderRadius: "8px",
                    mt: "10px",
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#28094A" : "#D8D8D9",
                  }}
                />

                <IconButton
                  sx={{
                    justifyContent:'start',
                    mt:'8px',
                    pl:'10px',
                    borderRadius: "8px",
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#28094A" : "#D8D8D9",
                  }}
                >
                  <AttachFile />
                  <label
                    for="choose-file"
                    id="choose-file-label"
                    style={{
                      fontSize:'15px',
                      marginInline:'8px',
                    }}
                  >
                  Add Attachment
                  </label>
                  <input
                    name="uploadDocument"
                    type="file"
                    id="choose-file"
                    accept=".jpg,.jpeg,.pdf,doc,docx,application/msword,.png"
                    style={{display: "none",
                  }}
                  />
                </IconButton>
              </Box>
              <Box display="flex" justifyContent="center" mt="20px">
                <Button
                  type="submit"
                  sx={{
                    paddingInline: "20px",
                    background: "#F85844",
                    borderRadius: "20px",
                  }}
                  variant="contained"
                >
                  Submit
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};
const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  message: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

export default HelpPage;
const TextIField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})(({ theme }) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: theme.palette.mode === "dark" ? "white" : "#1B0336",
  },
  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: theme.palette.mode === "dark" ? "white" : "#1B0336",
  },
}));
