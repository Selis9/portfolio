import { FiLinkedin, FiGithub, FiInstagram, FiMail  } from 'react-icons/fi'

const actions = [
  { icon: <FiLinkedin size="2em" className="my-8 text-black hover:text-zinc-600"/>, name: 'Linkedin', url:'https://www.linkedin.com/in/tonyandrewkang/'},
  { icon: <FiGithub size="2em" className="my-8 text-black hover:text-zinc-600"/>, name: 'Github', url:'https://github.com/Selis9' },
  { icon: <FiInstagram size="2em" className="my-8 text-black hover:text-zinc-600"/>, name: 'Instagram', url:'https://www.instagram.com/depth.of.tonee/'  },
  { icon: <FiMail size="2em" className="my-8 text-black hover:text-zinc-600"/>, name: 'Email', url: 'mailto:tony.andrew.kang@gmail.com' },
];

const SocialMedia = () => {
  return (
    <div className="fixed bottom-16 left-10 rounded-full bg-orange-200 z-50 justify-center p-2"
    >
      <div className="flex-row justify-around">
        {
          actions.map((icons) => {
            return (
              <a href={icons.url} target="_blank">{icons.icon}</a>
            )
          })
        }
      </div>
    </div>
  )
}

export default SocialMedia;