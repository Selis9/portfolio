import { FaReact, FaHtml5, FaCss3, FaAws, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiNodedotjs, SiMysql, SiMongodb, SiPostgresql, SiGooglecloud, SiExpo, SiAdobephotoshop, SiAdobelightroom } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const Tech = () => {
  const known = [
    { text: 'React', icon: <FaReact className="h-10 w-10 text-cyan-500"/>,},
    { text: 'HTML', icon: <FaHtml5 className="h-10 w-10 text-orange-500"/>, color: 'orange-500'},
    { text: 'CSS', icon: <FaCss3 className="h-10 w-10 text-blue-600"/>, color: 'blue-600'},
    { text: 'Javascript', icon: <SiJavascript className="h-10 w-10 text-yellow-400"/>, color: 'yellow-400'},
    { text: 'NodeJS', icon: <SiNodedotjs className="h-10 w-10 text-lime-500"/>, color: 'lime-500'},
    { text: 'MySQL', icon: <SiMysql className="h-10 w-10 text-sky-700"/>, color: 'sky-700'},
    { text: 'MongoDB', icon: <SiMongodb className="h-10 w-10 text-green-700"/>, color: 'green-700'},
    { text: 'PostgreSQL', icon: <SiPostgresql className="h-10 w-10 text-sky-600"/>, color: 'sky-600'},
    { text: 'AWS', icon: <FaAws className="h-10 w-10 text-white"/>, color: 'white'},
    { text: 'Google Cloud', icon: <SiGooglecloud className="h-10 w-10 text-white"/>, color: 'white'},
    { text: 'React Native', icon: <TbBrandReactNative className="h-10 w-10 text-cyan-500"/>, color: 'cyan-500'},
    { text: 'Expo', icon: <SiExpo className="h-10 w-10 text-white"/>, color: 'white'},
    { text: 'Figma', icon: <FaFigma className="h-10 w-10 text-white"/>, color: 'white'},
    { text: 'Photoshop', icon: <SiAdobephotoshop className="h-10 w-10 text-blue-600"/>, color: 'blue-600'},
    { text: 'Lightroom', icon: <SiAdobelightroom className="h-10 w-10 text-sky-700"/>, color: 'sky-700'},
  ];

  const learning = [
    { text: 'Typescript', value: 200 },
    { text: 'Docker', value: 300 },
    { text: '.Net', value: 250},
    { text: 'C#', value: 300},
  ];

  return (
    <div id="tech" className="bg-neutral-900 py-24 sm:py-32 h-fit px-8">
        <div className="mx-auto w-max pb-10">
          <p className="text-base font-semibold leading-7 text-blue-600 text-center">Tech</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Some of the tech that I have experience with.</h2>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-1xl md:grid-cols-3">
            {
              known.map((tech) => {
                return (
                  <div className="bg-white/5 p-8 sm:p-10 flex justify-start items-center">
                    <span>{tech.icon}</span>
                    <p className="align-middle text-center justify-center ml-24">{tech.text}</p>
                  </div>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

export default Tech;