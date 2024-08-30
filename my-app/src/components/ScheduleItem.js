import React from 'react';

const ScheduleItem = ({ day, time }) => {
  return (
    <p>{day} at {time}</p>
  );
};

export default ScheduleItem;