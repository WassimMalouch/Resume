import React from 'react';

const Skills = (props) => {
  const mySkills = (
    <div className='skills m-2 flex flex-col gap-2 '>
      {props.skills.map((skll) =>
        <div className='flex items-center justify-center justify-center ' key={skll.name}>
          <h3 className='w-[15%] max-sm:w-[30%]'>{skll.name}</h3>
          <div className="w-[30%] max-sm:w-[50%] bg-white rounded-full h-2.5  dark:bg-gray-700">
            <div className="bg-primary h-2.5 rounded-full dark:bg-gray-300" style={{width: "85%"}}></div>
          </div>
        </div>
      )}
    </div>
  );
  return (
    <div className='title text-primary w-full'>
    <i className='fa fa-briefcase'></i>
    <div className='mx-[50px] max-sm:mx-auto'><h2 className='text-primaryDark font-semibold text-2xl m-1'>COMPÉTENCES</h2></div>
    {mySkills}
  </div>
  )
};

export default Skills;
