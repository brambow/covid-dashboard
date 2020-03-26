import React from 'react';
import { Button } from 'theme-ui';
import { useDispatch } from 'react-redux';
import { setDayCount } from '../redux/actions';
import { FaPlay } from 'react-icons/fa';
import config from '../config';

const TimeAnimateButton = () => {
  const dispatch = useDispatch();
  const play = () => {
    let day = 0;
    dispatch(setDayCount(day));

    setInterval(() => {
      if (day > config.currentDayCount) return false;
      dispatch(setDayCount(day));
      day = day + 1;
    }, 250);
  };

  return (
    <Button
      onClick={() => {
        play();
      }}
    >
      <FaPlay />
    </Button>
  );
};

export default TimeAnimateButton;
