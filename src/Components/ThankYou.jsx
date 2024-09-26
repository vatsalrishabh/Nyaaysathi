import React from 'react';
import { Box, Typography } from '@mui/material';

const ThankYou = () => {
  return (
    <Box className="flex flex-col items-center justify-center h-screen p-4">
      <Typography variant="h4" className="mb-4">
        Thank You!
      </Typography>
      <Typography variant="body1" align="center">
        No worries! Please feel free to use our services in the future.
      </Typography>
    </Box>
  );
};

export default ThankYou;
