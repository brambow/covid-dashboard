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
          COVID-19 Cases in the United States
        </Heading>
        <Heading
          sx={{
            '@media only screen and (min-width: 769px)': {
              display: 'none',
            },
          }}
          as="h4"
        >
          COVID-19 Cases in the United States
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
      <Button
        sx={{
          borderColor: 'text',
          borderStyle: 'solid',
          borderWidth: 0.5,
          bg: 'background',
          borderRadius: 20,
        }}
        onClick={(e) => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
          dispatch(
            toggleColorMode(colorMode === 'default' ? 'dark' : 'default')
          );
        }}
      >
        {colorMode === 'default' ? (
          <span style={{ color: '#000' }}>☾</span>
        ) : (
          <span>☼</span>
        )}
      </Button>
    </Flex>
  );
};

export default Header;
