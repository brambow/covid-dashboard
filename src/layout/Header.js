import React from 'react';
import { Flex, Box, Heading, Text } from 'theme-ui';
import config from '../config';
import ColorModeButton from '../components/ColorModeButton';
import MapModeButton from '../components/MapModeButton';
/**
 * Header Component
 *
 *
 */

const Header = () => {
  const title = config.appTitle;
  return (
    <Flex
      p={2}
      bg="background"
      color="text"
      height={60}
      sx={{
        justifyContent: 'space-between',
        height: 60,
      }}
    >
      <Box>
        <Heading
          sx={{
            '@media only screen and (max-width: 768px)': {
              display: 'none',
            },
          }}
          as="h2"
        >
          {title}
        </Heading>
        <Heading
          sx={{
            '@media only screen and (min-width: 769px)': {
              display: 'none',
            },
          }}
          as="h4"
        >
          {title}
        </Heading>
      </Box>
      <Box>
        <Text
          sx={{
            '@media only screen and (max-width: 768px)': {
              display: 'none',
            },
          }}
          color="text"
        >
          Last Update: {config.lastUpdate}
        </Text>
      </Box>
      <MapModeButton />
      <ColorModeButton />
    </Flex>
  );
};

export default Header;
