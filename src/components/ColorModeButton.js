import React from 'react';
import { Button, useColorMode } from 'theme-ui';
import { useDispatch } from 'react-redux';
import { toggleColorMode } from '../redux/actions';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeButton = () => {
  const [colorMode, setColorMode] = useColorMode();
  const dispatch = useDispatch();
  return (
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
        dispatch(toggleColorMode(colorMode === 'default' ? 'dark' : 'default'));
      }}
    >
      {colorMode === 'default' ? (
        <FaMoon style={{ color: '#000' }} />
      ) : (
        <FaSun></FaSun>
      )}
    </Button>
  );
};

export default ColorModeButton;
