import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/userSlice";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill in all fields");
      return;
    }
    dispatch(setUserInfo({ name, phone }));
    navigate("/order-summary");
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 8, p: 4, boxShadow: 2 }}>
      <Typography variant="h5">Your Information</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Continue
        </Button>
      </form>
    </Box>
  );
}
