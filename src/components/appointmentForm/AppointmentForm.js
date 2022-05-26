import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChange = event => {
    const id = event.target.id;
    const value = event.target.value;

    switch (id) {
      case 'title':
        setTitle(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'time':
        setTime(value);
        break;
      case 'contact-picker':
        setContact(value);
        break;
      default:
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input  id='title'
              type='text'
              placeholder='Appointment Title'
              value={title} 
              onChange={handleChange} />
      <input  id='date'
              type='date'
              min={getTodayString()}
              placeholder='Date'
              value={date}
              onChange={handleChange}/>
      <input  id='time'
              type='time'
              placeholder='Time'
              value={time}
              onChange={handleChange}/>
      <ContactPicker id="contact-picker" contacts = {contacts} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
};
