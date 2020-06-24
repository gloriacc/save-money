import {useState} from 'react';

const useCalendar = () => {
  const [calendar, setCalendar] = useState<boolean>(true);
  const showCalendar = () => {
    setCalendar(true);
  };
  const hideCalendar = () => {
    setCalendar(false);
  };
  return {calendar, showCalendar, hideCalendar };
};
export {useCalendar};