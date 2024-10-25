import React from 'react';
import Footer from '../Footer/Footer';

export default function Contact() {
  return (
    <div className='shadow mx-4'>
        <div className=' h-full  pt-10 '>
      <h1 className='font-bold text-gray-600 text-center text-3xl pb-6'>CONTACT <span className='text-gray-950'>US</span></h1>

      <div className='flex md:flex-row gap-6 md:items-start pt-7 items-center mx-auto flex-col md:gap-14 justify-center w-4/5'>
<img src="/contact.png" alt="" className='md:w-80 w-96' />



<form className=" md:w-2/5 w-full">
            <div className="flex flex-col pb-3">
              <label className="pb-1"> Name:</label>
              <input type="text"  className="rounded" required placeholder="Enter your name" />
            </div>
            <div className="flex flex-col pb-3">
              <label className="pb-1">Email:</label>
              <input type="email" required className="rounded" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col pb-6">
              <label className="pb-1">Send a message:</label>
              <textarea type='text' required placeholder='typing...' className='rounded'/>
            </div>
            <div className="flex justify-center rounded items-center active">
            <button className="py-3 px-6 text-lg "  type="submit">Send message</button>
            </div>
          </form>

</div>


</div>

<Footer />
</div>

    
  )
}
