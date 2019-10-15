import React from 'react';
import { history } from './../App';
import JobJarScreenshot from '../assets/JobJarScreenshot.png';
import KDaceyScreenshot from '../assets/KDaceyScreenshot.png';
import MarsRoverScreenshot from '../assets/MarsRoverScreenshot.png';
import ChinguCertificate from '../assets/Chingu_Certificate.jpg';
import FCCCertificate from '../assets/FCC_Certificate.png';

export default function ProjectsScreen() {
  return (
    <div id='projects-screen'>
      <div className='content'>
        <div className='projects                                                                                           '>
          <h1>Projects</h1>

          <div className='project-description job-jar-description'>
            <a
              href='https://job-jar.herokuapp.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2>Job Jar</h2>
              <img
                src={JobJarScreenshot}
                alt='screenshot of Job Jar homepage'
              />
            </a>
            <p>
              A full-stack application with React and CSS/SASS on the frontend,
              and Node/Express, MongoDB/Mongoose on the backend.
            </p>

            <a
              href='https://github.com/SAnschutz/job-jar'
              target='_blank'
              rel='noopener noreferrer'
            >
              Job-Jar GitHub repository
            </a>
          </div>

          <div className='project-description kathy-portfolio'>
            <a
              href='https://sanschutz.github.io/KDaceyWebsite/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2>KDacey Portfolio</h2>
              <img src={KDaceyScreenshot} alt='' />
            </a>
            <p>
              Website built for a local small business, utilizing React and
              HTML/CSS.
            </p>
            <a
              href='https://github.com/SAnschutz/KDaceyWebsite'
              target='_blank'
              rel='noopener noreferrer'
            >
              KDacey Cakes GitHub repository
            </a>
          </div>

          <div className='project-description rover-app-description'>
            <a
              href='https://sanschutz-mars-rover-app.herokuapp.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2>Mars Rover</h2>
              <img
                src={MarsRoverScreenshot}
                alt='screenshot of Mars Rover application'
              />
            </a>

            <p>
              Mars Rover is a full-stack application created as part of my
              application to the Chingu program, with React and SASS on the
              front end, and Node on the backend.
            </p>
            <a
              href='https://github.com/SAnschutz/Chingu-tier-3-prework-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Mars Rover GitHub repository
            </a>
          </div>

          <div className='product-description certifications'>
            <h2>Certifications</h2>

            <a
              href='https://www.freecodecamp.org/certification/fcc24b1501f/full-stack'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h4>FreeCodeCamp Certificate of Completion </h4>
              <img
                src={FCCCertificate}
                alt='FreeCodeCame certificate thumbnail'
                className='certificate'
              />
            </a>
            <h4 onClick={() => history.push('/chingucert')}>
              Chingu (Voyage 10) Certificate of Completion
            </h4>
            <img
              src={ChinguCertificate}
              alt='Chingu certificate thumbnail'
              className='certificate'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
