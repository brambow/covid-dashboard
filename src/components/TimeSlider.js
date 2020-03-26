import React from 'react';
import { Card, Box, Slider, Text, Heading, Flex } from 'theme-ui';
import { useSelector, useDispatch } from 'react-redux';
import { setDayCount } from '../redux/actions';
import TimeAnimateButton from './TimeAnimateButton';
import config from '../config';

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
        '@media only screen and (max-width: 1824px)': {
          width: 280,
        },
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
            max={config.currentDayCount}
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
      <Text>Start Date: {config.startDate}</Text>
      <Text>End Date: {config.lastUpdate}</Text>
    </Card>
  );
};

export default TimeSlider;
