import React from 'react';
import { Button, useColorMode } from 'theme-ui';
import { useDispatch } from 'react-redux';
import { toggleColorMode } from '../redux/actions';
import { FaMoon, FaSun } from 'react-icons/fa';

const MapModeButton = () => {
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
        dispatch(toggleMapMode(mapMode === '2D' ? '3D' : '2D'));
      }}
    >
      {mapMode === '2D' ? <span>2D</span> : <span>3D</span>}
    </Button>
  );
};

export default MapModeButton;
