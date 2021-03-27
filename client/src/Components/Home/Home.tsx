import { Box } from '@chakra-ui/layout';
import React, { useState } from 'react';
import Data from './Data/Data';

interface Home {}

const Home: React.FC<Home> = ({}) => {
  return (
    <Box display="flex" justifyContent="space-evenly">
      <Data label="gold" />
      <Data label="silver" />
    </Box>
  );
};

export default Home;
