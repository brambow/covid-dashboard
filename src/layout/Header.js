import React from 'react';
import { Flex, Box, Heading, Text } from '@theme-ui/components';
import config from '../config';
/**
 * Header Component
 *
 *
 */

const Header = () => {
  return (
    <Flex bg="text" color="primary" height={60}>
      <Box p={2}>
        <Flex>
          <Box>
            <Heading as="h1">
              Coronavirus Cases in the United States (By County)
            </Heading>
          </Box>
          <Box>
            <Text color="primary">Last Update: {config.lastUpdate}</Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
