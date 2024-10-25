import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import Footer from '../components/Footer/Footer';
const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='mx-6'>
      <h2 className='text-center font-bold text-2xl text-gray-700 pt-12 pb-6'>  Book Your Appointment</h2>
      

<form className="pt-4">
<div className='flex gap-8 justify-center md:flex-row flex-col md:items-start items-center'>
<div>
<DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        placeholderText="Click to select a date"
        inline
      />
      {selectedDate && (
        <p className='text-center pt-3 '> {moment(selectedDate).format('MMMM Do, YYYY')}</p>
      )}

</div> 
  <div className=' md:w-1/5 w-full'>
            <div className="flex flex-col pb-2 md:pb-0  ">
              <label className="pb-1">Name:</label>
              <input type="text" className="rounded  " required placeholder="Enter your name" />
            </div>
            <div className='flex md:items-center md:flex-row flex-col md:gap-4'>
            <div className="flex flex-col pb-2 md:pb-0 md:w-32">
              <label className="pb-1">Email:</label>
              <input type="email" className="rounded  " placeholder="Enter your email" />
            </div>
            <div className="flex flex-col pb-2 md:pb-4">
            <label className='pb-1 md:pt-4 ' >Time:</label>
<input type="time" id="meeting-time" name="meeting-time" className='rounded'  min="09:00" max="18:00" />
</div>
            </div>
            <div className="flex flex-col pb-6">
              <label className="pb-1">Description:</label>
              <textarea type='text' placeholder='typing...' required className='rounded'/>
            </div>
            
            <div className="flex justify-center rounded items-center active">
            <button className="py-3 px-6 text-lg "  type="submit">Book Now</button>
            </div>
</div>
</div>
          </form>
<Footer />
    </div>
  );
};

export default Booking;
