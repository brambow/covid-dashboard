import React from 'react';
import { Card, Box, Slider, Text, Heading, Flex } from 'theme-ui';
import { useSelector, useDispatch } from 'react-redux';
import { setDayCount } from '../redux/actions';
import TimeAnimateButton from './TimeAnimateButton';

const TimeSlider = () => {
  const dayCount = useSelector((state) => state.dayCount);
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        position: 'relative',
        top: '1rem',
        left: '1rem',
        zIndex: 2,
        bg: 'background',
        width: 400,
      }}
    >
      <Heading as="h4" sx={{ textAlign: 'center' }}>
        Time Slider
      </Heading>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ flexGrow: 3, px: 2 }}>
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
        </Box>
        <Box sx={{ flexGrow: 1, px: 2 }}>
          <TimeAnimateButton />
        </Box>
      </Flex>

      <Heading as="h4" sx={{ textAlign: 'center' }}>
        Day: {dayCount}
      </Heading>
      <Text>Start Date: 01/22/2020</Text>
      <Text>End Date: 03/23/2020</Text>
    </Card>
  );
};

export default TimeSlider;
