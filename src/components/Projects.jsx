import Odin from '../assets/Odin.png';
import GameStart from '../assets/GameStart.gif';
import Moist from '../assets/Moist.png';
import Reviews from '../assets/SDC_Reviews.png';
import TellafriendWeb from '../assets/tellafriendlanding.png';
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    name: 'Odin',
    techstack: 'HTML, CSS, Javascript, React, Node, Express, MySQL',
    imageUrl: Odin,
    info: 'Project consiting of 4 team members builiding a Frontend E-commerce platform with legacy data using React. Given an API and Business requirement document, the team took ownership of each section of the page and collaboratively built the frontend calling the API for each section.',
    githubURL: 'https://github.com/rfp2207boyz2men/frontendcapstone',
  },
  {
    name: 'Reviews Backend Data',
    techstack: 'Node, Express, PostgreSQL, nginx, AWS, artillery',
    imageUrl: Reviews,
    info: '3-person backend project to build the API server and database server with legacy frontend data using PostgreSQL given relatively raw data that needed to be loaded to a database.',
    githubURL: 'https://github.com/Selis9/SDC_Reviews',
  },
  {
    name: 'Moist',
    techstack: 'HTML, CSS, Javascript, React, Node, Express, MongoDB',
    imageUrl: Moist,
    info: 'Solo Fullstack Gardening Journal with watering reminder app built in less than a day - built with React, Express, Node, and MongoDB. Keep track of your plants, when you water them, when you planted them, and when you last fertlized them. Future possible implementations include local weather affecting watering timing and reminders.',
    githubURL: 'https://github.com/Selis9/Moist',
  },
  {
    name: 'GameStart',
    techstack: 'HTML, CSS, Javascript, React, Node, Express, React Native, PostgreSQL, Firebase',
    imageUrl: GameStart,
    info: 'Project consisting of 6 team members to build a fullstack game trading app built with React Native, Express, Node, and PostgreSQL. The app allows users to post/send trades with other users, has a built in messaging feature, and includes a map feature to show nearby traders (similar to rideshare services). Connected to gaming API for full details and photos.',
    githubURL: 'https://github.com/rfp2207boyz2men/frontendcapstone',
  },
  {
    name: 'tellafriend.io',
    techstack: 'HTML, CSS, Javascript, React, Node, Express, React Native, PostgreSQL, Firebase',
    imageUrl: TellafriendWeb,
    info: 'Website/landing page built with React for early non-profit startup while mobile app is being developed - tellafriend.io',
    githubURL: 'https://tellafriend.io',
  },
]

const Projects = () => {
  return (
    <div id="projects" className="bg-white py-24 md:py-32 h-fit px-8 w-full mx-auto">
      <div className="flex-colw-fit mx-auto text-center pb-10">
        <p className="text-base font-semibold leading-7 text-blue-600">Projects</p>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A few of my projects.</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
              Here are a few projects I have done during Hack Reactor - and after.
        </p>
      </div>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          {projects.map((project) => (
            <li key={project.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
              <img className="aspect-[4/5] w-64 flex-none rounded-1xl object-cover border-2" src={project.imageUrl} alt="" />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-orange-700">{project.name}</h3>
                <p className="text-base leading-7 text-black">{project.techstack}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{project.info}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={project.githubURL} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Github</span>
                      <FaGithub className="h-8 w-8"/>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Projects;
