import React from 'react';

const Certificate = (props) => {
  const myCertificates = (
    <div className='flex flex-col gap-5 m-2'>
      {props.certificate.map((cert) =>
        <div className='flex flex-col gap-1 max-sm:flex-col w-full justify-center' key={cert.name}>
          <div className='mx-auto w-[55%] max-sm:w-[100%]'><h3 className='bg-primary  w-[100%] text-center  h-fit max-sm:w-[100%]     text-white rounded px-2 py-1' >{cert.name} @ {cert.institution} <span>{cert.date}</span></h3></div>
          <p className=' mx-auto mt-2 border-t-2 border-white  w-[60%] max-sm:w-fit text-center '>{cert.description}</p>
        </div>
      )}
    </div>
  );
  return (
    <div className='text-primary w-full'>
      <i className='fa fa-trophy'></i>
      <div className='mx-[50px] max-sm:mx-auto'> <h2 className='text-primaryDark font-semibold text-2xl m-1'>CERTIFICATIONS</h2></div>
      {myCertificates}
    </div>
  )
};

export default Certificate;
