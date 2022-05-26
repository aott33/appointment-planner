import React, {useState} from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const appointments = props.appointments;
  const addAppointment = props.addAppointment;
  const contacts = props.contacts;

  const [currentTitle, setCurrentTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({title: currentTitle, date: date, time: time});

    setCurrentTitle('');
    setContact('');
    setDate('');
    setTime('');
    
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm  contacts={contacts}
                          title={currentTitle}
                          setTitle={setCurrentTitle}
                          contact={contact}
                          setContact={setContact}
                          date={date}
                          setDate={setDate}
                          time={time}
                          setTime={setTime} 
                          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointments} />
      </section>
    </div>
  );
};
