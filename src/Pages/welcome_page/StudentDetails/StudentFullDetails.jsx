import React from 'react';
import students from './StudentArr';
import background from '../../../image/background.jpg';

const StudentFullDetails = () => {

    const { name, skills, imageUrl, github, portfolio, experience, desc } = students[0];

    return (
        <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <div className="bg-white p-6 rounded shadow-md">
          <div className="flex items-center mb-6 relative" >
            
            <img src={background} alt="" className=''/>
            <img
              src={imageUrl}
              alt={name}
              className="rounded-full md:h-[12rem] md:w-[12rem] w-[8rem] h-[8rem] mr-6 absolute border-2 border-white border-solid bottom-[-4rem] left-10"
            />
          </div>
            
          <div className='mt-[5rem]'>
              <h1 className="text-3xl font-bold">{name}</h1>
              <p className="text-gray-600">Software Developer</p>
            </div>
          <div className="mb-6">
            
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <ul className="flex flex-wrap">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2"
                >
                  {`${skill.skill} - ${skill.level}`}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Experience</h2>
            <ul>
              {experience.map((exp, index) => (
                <li key={index} className="mb-2">
                  <p className="font-semibold">{exp.position}</p>
                  <p className="text-gray-600">{`${exp.company} | ${exp.years} years`}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{desc}</p>
          </div>

          <div className="mt-8">
            <p className="text-blue-500">
              <a href={github} target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </p>
            <p className="text-blue-500 mt-2">
              <a href={portfolio} target="_blank" rel="noopener noreferrer">
                Visit Portfolio
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
      );
    };
    

export default StudentFullDetails
