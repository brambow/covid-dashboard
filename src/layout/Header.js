import React from 'react';
import { Flex, Button, Box, Heading, Text, useColorMode } from 'theme-ui';
import config from '../config';
import { useDispatch } from 'react-redux';
import { toggleColorMode } from '../redux/actions';
/**
 * Header Component
 *
 *
 */

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  const dispatch = useDispatch();
  return (
    <Flex
      p={2}
      bg="background"
      color="text"
      height={60}
      sx={{ justifyContent: 'space-between' }}
    >
      <Box>
        <Heading as="h1">
          Coronavirus Cases in the United States (By County)
        </Heading>
      </Box>
      <Box>
        <Text color="text">Last Update: {config.lastUpdate}</Text>
      </Box>
      <Button
        onClick={(e) => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
          dispatch(
            toggleColorMode(colorMode === 'default' ? 'dark' : 'default')
          );
        }}
      >
        {colorMode === 'default' ? 'Dark' : 'Light'} Mode
      </Button>
    </Flex>
  );
};

export default Header;
