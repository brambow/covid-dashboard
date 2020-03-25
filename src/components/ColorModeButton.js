import React from 'react';
import { Button, useColorMode } from 'theme-ui';
import { useDispatch } from 'react-redux';
import { toggleColorMode } from '../redux/actions';

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
        <span style={{ color: '#000' }}>☾</span>
      ) : (
        <span>☼</span>
      )}
    </Button>
  );
};

export default ColorModeButton;
