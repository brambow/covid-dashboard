import React from 'react';
import { Button } from 'theme-ui';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMapMode } from '../redux/actions';

const MapModeButton = () => {
  const dispatch = useDispatch();
  const mapMode = useSelector((state) => state.mapMode);
  return (
    <Button
      sx={{
        borderColor: 'text',
        borderStyle: 'solid',
        borderWidth: 0.5,
        bg: 'background',
        borderRadius: 20,
        color: 'text',
      }}
      onClick={(e) => {
        dispatch(toggleMapMode(mapMode === '2D' ? '3D' : '2D'));
      }}
    >
      {mapMode === '2D' ? '3D' : '2D'}
    </Button>
  );
};

export default MapModeButton;
