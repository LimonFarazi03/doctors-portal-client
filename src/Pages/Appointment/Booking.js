import React from 'react';
import PrimaryButton from "../Shared/PrimaryButton";

const Booking = ({setTreatment,service}) => {
  const {name,slots} = service;
  return (
    <div className='text-center'>
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center font-bold text-xl text-secondary mb-2">{name}</h2>
    <div className='my-3'>
    <p className="mb-1">{slots.length > 0 ? <p>{slots[0]}</p> : <p className="text-red-500 font-bold">try another day</p>}</p>
    <p className="mt-2">{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p></div>
    <div class="card-actions justify-center">
      {/* <button disabled={slots.length === 0} className="text-white font-bold btn btn-primary">Book Now</button> */}
      <label onClick={()=>setTreatment(service)} disabled={slots.length === 0} for="booking-modal" class="text-white font-bold btn btn-primary">Book Appointment</label>
    </div>
  </div>
</div>
</div>
  );
};

export default Booking;