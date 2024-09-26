import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import qrcode from '../assets/legalaid.jpeg'; // Ensure this path is correct

const FirstPage = () => {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Typography
        variant="h4"
        className="mb-4 font-bold text-center text-blue-700"
      >
        न्याय साथी को आप 400 रूपए का भुगतान करने जा रहे
      </Typography>
      <img
        src={qrcode}
        alt="QR Code"
        className="mb-6 w-72 h-72 md:w-96 md:h-96" // Enlarge and make responsive
      />
      <Typography variant="h6" className="mb-2">
        Click the button below to pay 400 Rupees.
      </Typography>
      <a href="upi://pay?pa=vatsalrishahb00@okicici&pn=Vatsal&am=400&cu=INR&tid=txn123456">
        <Button
          variant="contained"
          color="primary"
          startIcon={<PaymentIcon />}
          size="large"
        >
          Pay 400 Rupees
        </Button>
      </a>
    </Box>
  );
};

export default FirstPage;
