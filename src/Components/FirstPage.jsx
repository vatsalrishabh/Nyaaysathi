import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import qrcode from '../assets/legalaid.jpeg'; // Ensure this path is correct

const FirstPage = () => {
  const [amount, setAmount] = useState(400); // Default amount

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
  };

  const upiLink = `upi://pay?pa=vatsalrishabh00@okicici&pn=Vatsal%20Rishabh%20Pandey&am=${amount}.00&cu=INR&aid=uGICAgIC3roLKRw`;

  return (
    <Box className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Typography
        variant="h4"
        className="mb-4 font-bold text-center text-blue-700"
      >
        न्याय साथी को आप {amount} रूपए का भुगतान करने जा रहे हैं
      </Typography>
      <img
        src={qrcode}
        alt="QR Code"
        className="mb-6 w-72 h-72 md:w-96 md:h-96" // Enlarge and make responsive
      />
      <Typography variant="h6" className="mb-2">
        नीचे दिए गए बटन पर क्लिक करके भुगतान करें।
      </Typography>
      
      <Box className="flex space-x-4 mb-4">
        <Button 
          variant="outlined" 
          onClick={() => handleAmountChange(50)}
          color={amount === 50 ? 'primary' : 'default'}
        >
          50 रूपए का भुगतान करें
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => handleAmountChange(400)}
          color={amount === 400 ? 'primary' : 'default'}
        >
          400 रूपए का भुगतान करें
        </Button>
      </Box>

      <Typography variant="body1" className="mb-4 text-center">
        {amount === 50 
          ? 'आपको 350 रूपए और भुगतान करने होंगे, जो कि ड्राफ्ट और कंसल्टेंसी के लिए व्हाट्सएप और कॉल के माध्यम से होंगे।' 
          : 'आप अपना पूरा भुगतान करने जा रहे है ।'
        }
      </Typography>

      <a href={upiLink}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PaymentIcon />}
          size="large"
        >
          {amount} रूपए का भुगतान करें
        </Button>
      </a>
    </Box>
  );
};

export default FirstPage;
