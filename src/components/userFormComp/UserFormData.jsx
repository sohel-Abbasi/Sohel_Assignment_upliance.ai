import { Box, Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserFormData = () => {
  const [userformData, setUserFormData] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("userFormData")) || {
        id: Math.random().toString(36).substring(2, 9),
        name: "",
        address: "",
        email: "",
        phone: "",
      }
    );
  });

  const [isSavedCheck, setIsSavedCheck] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!isSavedCheck) {
        e.preventDefault();
        e.returnValue =
          "You have unsaved changes, are you sure you want to leave?";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isSavedCheck]);

  const handleChange = (e) => {
    setUserFormData({
      ...userformData,
      [e.target.name]: e.target.value,
    });
    setIsSavedCheck(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userFormData", JSON.stringify(userformData));
    // if you want to check data is saved or not go to console and check
    console.log(userformData);
    setIsSavedCheck(false);
    // alert message that verify data saved or not
    toast.success("Form Submitted and saved Successfully");
  };

  return (
    <Box
      sx={{
        border: "1px solid black",
        padding: "20px",
        borderRadius: "10px",
        marginRight: "20px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>USER FORM</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="name"
          name="name"
          fullWidth
          value={userformData.name}
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="address"
          name="address"
          fullWidth
          value={userformData.address}
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="email"
          name="email"
          fullWidth
          value={userformData.email}
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="phone number"
          name="phone"
          fullWidth
          value={userformData.phone}
          margin="normal"
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="primary"
          sx={{ margin: "10px 0" }}
        >
          Submit
        </Button>
      </form>
      <ToastContainer />
    </Box>
  );
};

export default UserFormData;
