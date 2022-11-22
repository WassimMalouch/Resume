import React from 'react';

const Education = (props) => {
  const myEducation = (
    <div className='flex flex-col gap-5 m-2'>
      {props.education.map((edu) =>
        <div className='flex-col gap-1 max-sm:flex-col w-full justify-center  ' key={edu.degree}>
          <div className='mx-auto w-[55%] text-center max-sm:w-[100%] bg-primary   h-fit   text-white rounded  py-1  '><h3>{edu.degree} @ {edu.institution} <span>{edu.startDate} - {edu.endDate}</span></h3></div>
          <p className=' mx-auto mt-2 w-[60%] max-sm:w-fit border-t-2 border-white  text-center'>{edu.description}</p>
        </div>
      )}
    </div>
  );
  return (
    <div className='title text-primary w-full'>
      <i className='fa fa-graduation-cap'></i>
      <div className='mx-[50px] max-sm:mx-auto'><h2 className='text-primaryDark font-semibold text-2xl m-1'>FORMATION</h2></div>
      {myEducation}
    </div>
  )
};

export default Education;
