import React from 'react'
import { BsNewspaper } from 'react-icons/bs'



function Resume() {
  return (
    <div id='section-3' className='overflow-y-scroll w-full mx-auto h-screen bg-[#2e2d2d] text-[#e1e1e1] pb-4'>
    <div className='pt-20 px-4 md:pl-60 md:pt-10 max-w-6xl mx-auto'>
        <div className=''>
            <div className='text-4xl text-[#00A3E1] pb-4 flex justify-between items-center'>
                <h1 className=''>My Resume</h1>
                <BsNewspaper/>
            </div>
            <hr className=''/> 
            <object data="/Win_Aung_Resume_3.pdf" type="application/pdf" width="100%" height="800px">
            <p>Unable to display PDF file. <a href="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf">Download</a> instead.</p>
            </object>
      </div>
    </div>
</div>
  )
}

export default Resume