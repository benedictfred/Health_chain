import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink, useNavigate } from "react-router-dom";
import AuthPage from '../../pages/Create_account';
const CreateAccount = () => {

  const navigate = useNavigate();

  return (

  <div className=' bg-primary rounded-lg mx-4 pt-12 md:pt-8 h-fit px-6 md:px-24 md:mx-32'>
    <div className='flex justify-center md:flex-row flex-col  gap-8 items-center'>
    <div className='flex   flex-col gap-6    md:my-20  '>
      {/* left-side */}
<div className='text-white font-bold text-3xl md:text-5xl'>
  <h2 className='pb-3' >Book Appointment</h2>
  <h2>with 100k+ Trusted Doctors</h2>
</div>
<button  onClick={() => navigate("./create_account")}
                  className='md:w-2/5 w-4/5 rounded-full bg-white hover:bg-slate-200 py-4 px-6 text-gray-700'>Create account</button>
</div>




      {/* right-side */}

      <div className=' md:block md:w-1/2  ' >
        <img src={assets.appointment_img} className='' alt="" />
      </div>
</div>

    </div>
  )
}

export default CreateAccount