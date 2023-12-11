import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateTimePicker({ onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
        showYearDropdown="true"
        scrollableYearDropdown
        showMonthDropdown="true"
        todayButton="Aujourd'hui"
      />
    </div>
  );
}

export default DateTimePicker;
