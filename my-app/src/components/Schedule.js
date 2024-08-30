import React from 'react';
import ScheduleItem from './ScheduleItem';

const Schedule = () => {
  return (
    <>
      <h2>Practice Schedule</h2>
      <div>
        <ScheduleItem
          day="Monday"
          time="6 - 7:30pm"
        />
        <ScheduleItem
          day="Wednesday"
          time="6 - 7:30pm"
        />
        <ScheduleItem
          day="Saturday"
          time="9 - 10:30am"
        />
      </div>
      <p>All practices take place at the boat launch near Cass Park Access Road.</p>
    </>
  );
};

export default Schedule;