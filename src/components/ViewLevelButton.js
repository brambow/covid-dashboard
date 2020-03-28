import React from 'react';
import { Button } from 'theme-ui';
import { useDispatch, useSelector } from 'react-redux';
import { setViewLevel } from '../redux/actions';

const ViewLevelButton = () => {
  const dispatch = useDispatch();
  const viewLevel = useSelector((state) => state.viewLevel);
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
        dispatch(
          setViewLevel(viewLevel === 'counties' ? 'states' : 'counties')
        );
      }}
    >
      {viewLevel === 'counties' ? 'states' : 'counties'}
    </Button>
  );
};

export default ViewLevelButton;
