import React from 'react';
import { Card, Flex, Heading, Text, Box } from 'theme-ui';
import data from '../data/total_us_cases';

const CountsCard = () => {
  return (
    <Card
      sx={{
        marginBottom: 4,
        fontSize: [0, 1, 2],
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Heading as="h2">Current US Counts</Heading>
      <Flex sx={{ mt: 2, px: 4, justifyContent: 'space-between' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Heading as="h1" sx={{ color: 'cases' }}>
            {data[data.length - 1].total_confirmed_cases}
          </Heading>
          <Text>CASES </Text>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Heading as="h1" sx={{ color: 'deaths' }}>
            {data[data.length - 1].total_deaths}
          </Heading>
          <Text>DEATHS </Text>
        </Box>
      </Flex>
    </Card>
  );
};

export default CountsCard;
