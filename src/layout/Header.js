import React from 'react';
import { Flex, Box, Heading } from '@theme-ui/components';

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
            <Heading as="h1">Coronavirus Cases in South Carolina</Heading>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
