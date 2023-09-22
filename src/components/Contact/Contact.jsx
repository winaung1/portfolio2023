import React, { useRef, useState } from 'react'
import { BsEnvelope } from 'react-icons/bs'
import { AiFillPhone, AiOutlinePaperClip } from 'react-icons/ai'
import { FaClipboardList, FaPaperPlane } from 'react-icons/fa'
import { PiClipboardTextFill } from 'react-icons/pi'

function Contact() {

  const [successMessage, setSuccessMessage] = useState('')
  const emailRef = useRef()
  const phoneRef = useRef()
  function myFunction(val) {
    // Get the text field
    var text = val;

    // Copy the text inside the text field
    navigator.clipboard.writeText(text);
    
    // // Alert the copied text
    setTimeout(() => {
      setSuccessMessage('');
    }, 2000)
    setSuccessMessage("Copied: " + text);
  }
  return (
    <div id='section-5' className='overflow-y-scroll w-full mx-auto h-screen bg-[#2e2d2d] text-[#e1e1e1] pb-4'>
    <p className='transition-all duration-300 ease-in z[90000] fixed top-0 left-0 bg-[#00A3E1] text-white w-full text-center'>{successMessage}</p>
    <div className='pt-20 px-4 md:pl-60 md:pt-10 max-w-6xl mx-auto'>
        <div className=''>
            <div className='text-4xl text-[#00A3E1] pb-4 flex justify-between items-center'>
                <h1 className=''>Contact Me</h1>
                <BsEnvelope/>
            </div>
            <hr className=''/> 
            <h1 className='mx-auto text-2xl text-center my-10 uppercase border-[#00A3E1] rounded-xl border-b  w-fit px-2'>Let's Talk</h1>
            <div class="flex items-center justify-center">
        <div class="bg-transparent p-8 rounded-lg shadow-lg w-[80%] pt-0">
            <form action="#" method="POST">
                <div class="mb-4">
                    <label for="name" class="block text-gray-600">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#00A3E1] bg-transparent" required/>
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-600">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="johndoe@example.com" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#00A3E1] bg-transparent" required/>
                </div>
                <div class="mb-4">
                    <label for="message" class="block text-gray-600">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Your message here" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#00A3E1] bg-transparent" required></textarea>
                </div>
                <div class="flex justify-center">
                    <button type="submit" class="w-[30%] border border-[#00A3E1] text-[#00A3E1] px-4 py-2 rounded-lg hover:bg-[#00A3E1] hover:text-black transition duration-300 ease-in-out uppercase tracking-widest">Send Message</button>
                </div>
            </form>
        </div>
    </div>
        <div className='flex-col flex lg:flex-row justify-center lg:space-x-6 items-center py-10'>
          <div className='group relative flex flex-col items-center gap-2 hover:border border-[#00A3E1] cursor-pointer  px-4 p-2 rounded-lg'>
          <FaPaperPlane className='text-4xl text-[#00A3E1]'/>
          <p ref={emailRef} className='text-xl tracking-widest'>winaung1997@outlook.com</p>
          <PiClipboardTextFill onClick={() => myFunction(emailRef.current.innerHTML)} className='group-hover:block hidden absolute top-2 right-4 text-gray-600 hover:text-white'/>
          </div>
          <div className='group relative flex flex-col items-center gap-2 hover:border border-[#00A3E1] cursor-pointer  px-4 p-2 rounded-lg'>
          <AiFillPhone className='text-4xl text-[#00A3E1]'/>
          <p ref={phoneRef} className='text-xl tracking-widest'>801-918-1587</p>
          <PiClipboardTextFill onClick={() => myFunction(phoneRef.current.innerHTML)} className='group-hover:block hidden absolute top-2 right-4 text-gray-600 hover:text-white'/>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Contact