import React from 'react';
import { Flex, Box, Heading, Text, Image } from 'theme-ui';
import config from '../config';
import ColorModeButton from '../components/ColorModeButton';
import MapModeButton from '../components/MapModeButton';
import logo from '../logo.png';
import darkLogo from '../logo_dark.png';
import { useSelector } from 'react-redux';
import ViewLevelButton from '../components/ViewLevelButton';
/**
 * Header Component
 *
 *
 */

const Header = () => {
  const colorMode = useSelector((state) => state.colorMode);
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
        <Flex
          sx={{
            alignItems: 'center',
          }}
        >
          <Image
            sx={{ height: 50 }}
            src={colorMode === 'default' ? logo : darkLogo}
          />
          <Heading
            sx={{
              '@media only screen and (max-width: 768px)': {
                display: 'none',
                float: 'left',
              },
            }}
            as="h1"
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
        </Flex>
      </Box>
      <Box></Box>
      <Box>
        <Flex
          sx={{
            height: 50,
            alignItems: 'center',
          }}
        >
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
        </Flex>
      </Box>
      <Box>
        <Flex
          sx={{
            height: 50,
            alignItems: 'center',
          }}
        >
          <ViewLevelButton />
          <MapModeButton />
          <ColorModeButton />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
