import Calendar from "react-calendar";
import {
  BoxBtnForCalendar,
  BtnForCalendarChooseDate,
  BtnFroCalendarCancel,
  ContainerCalendar,
} from "./FormComponent.styled";
import "react-calendar/dist/Calendar.css";
import { correctDateCalendar } from "../../utility/helpers";

const CalendarComponent = ({
  onChange,
  value,
  handleCalendar,
  setCalendarValue,
  setIsCalendarOpen,
}) => {
  const handlerBtnCancel = () => {
    handleCalendar();
    // setIsCalendarOpen(false);
    setCalendarValue("");
  };
  const handlerBtnChooseDate = () => {
    handleCalendar();
    setIsCalendarOpen(false);
    setCalendarValue(correctDateCalendar(value));
  };
  return (
    <ContainerCalendar>
      <Calendar
        onChange={onChange}
        value={value}
        showNeighboringMonth={false}
        locale="EN"
        calendarType="gregory"
        next2Label={null}
        prev2Label={null}
      />
      <BoxBtnForCalendar>
        <BtnFroCalendarCancel type="button" onClick={handlerBtnCancel}>
          Cancel
        </BtnFroCalendarCancel>
        <BtnForCalendarChooseDate type="button" onClick={handlerBtnChooseDate}>
          Choose date
        </BtnForCalendarChooseDate>
      </BoxBtnForCalendar>
    </ContainerCalendar>
  );
};

export default CalendarComponent;
