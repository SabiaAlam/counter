import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
      <Typography variant="h4" gutterBottom>
        Counter: {counter}
      </Typography>
      <Box>
        <Button variant="contained" color="primary" onClick={increment} style={{ marginRight: 10 }}>
          Increment
        </Button>
        <Button variant="contained" color="secondary" onClick={decrement}>
          Decrement
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
