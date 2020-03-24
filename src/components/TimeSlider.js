import React, { useEffect } from 'react';
import { Card, Slider, Text, Heading } from 'theme-ui';
import { useSelector, useDispatch } from 'react-redux';
import { setDayCount } from '../redux/actions';

const TimeSlider = () => {
  const dayCount = useSelector((state) => state.dayCount);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(dayCount);
  // }, [dayCount]);

  return (
    <Card
      sx={{
        position: 'absolute',
        top: '8rem',
        left: '5rem',
        zIndex: 2,
        bg: 'background',
        p: 4,
        width: 300,
        borderRadius: 20,
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Heading as="h4" sx={{ textAlign: 'center' }}>
        Time Slider
      </Heading>
      <Slider
        value={dayCount}
        onChange={(e) => {
          const value = e.currentTarget.value;
          dispatch(setDayCount(value));
        }}
        min="0"
        max="60"
        step="1"
      ></Slider>
      <Heading as="h4" sx={{ textAlign: 'center' }}>
        Day: {dayCount}
      </Heading>
    </Card>
  );
};

export default TimeSlider;
