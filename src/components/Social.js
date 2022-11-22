import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const   Social = (props) => {
  const socialNetworks = (
    <ul className='p-1 flex'>
      {props.social.map((socialNetwork) =>
        <li className='p-1  ' key={socialNetwork.name}> 
          <a href={socialNetwork.url} target='_blank' rel="noopener noreferrer">
            {socialNetwork.name === 'Github' ? <div className='hover:bg-white rounded p-1 text-third hover:text-primary  flex justify-center items-center gap-1'><GitHubIcon/><span>  Github</span></div> : <div className='text-third hover:bg-white rounded p-1  hover:text-primary  flex justify-center items-center gap-1'><LinkedInIcon/><span>  LinkedIn</span></div>  }
          </a>
        </li>
      )}
    </ul>
  );
  return (
    <div className="social">
      {socialNetworks}
    </div>
  )
};

export default Social;
