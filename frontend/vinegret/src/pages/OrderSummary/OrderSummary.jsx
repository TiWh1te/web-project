import { useSelector } from "react-redux";
import { Box, Typography, Button } from "@mui/material";

export default function OrderSummary() {
  const user = useSelector((state) => state.user);

  const handlePlaceOrder = () => {
    alert(`Order placed for ${user.name}, phone: ${user.phone}`);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5">Order Summary</Typography>
      <Typography>Name: {user.name}</Typography>
      <Typography>Phone: {user.phone}</Typography>
      <Button variant="contained" sx={{ mt: 2 }} onClick={handlePlaceOrder}>
        Place Order
      </Button>
    </Box>
  );
}
