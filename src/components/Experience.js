import React from 'react';

const Experience = (props) => {
  const myExperience = (
    <div className='m-2'>
      {props.experience.map((exp) =>
        <div className='flex flex-col gap-1 max-sm:flex-col w-full justify-center' key={exp.jobTitle}>
          <div className='bg-primary inline-block w-[55%] text-center  h-fit max-sm:w-[100%]  text-white rounded px-2 py-1 mx-auto'><h3>{exp.jobTitle} @ {exp.company} <span>{exp.startDate} - {exp.endDate}</span></h3></div>
          <div className='mx-auto mt-2 w-[60%] max-sm:w-fit border-t-2 border-white  text-center'><p >{exp.jobDescription}</p></div>
        </div>
      )}
    </div>
  );
  return (
    <div className='title text-primary w-full'>
      <i className='fa fa-briefcase'></i>
      <div className='mx-[50px] max-sm:mx-auto'><h2 className='text-primaryDark  font-semibold text-2xl m-1'>EXPERIENCES</h2></div>
      {myExperience}
    </div>
  )
};

export default Experience;
