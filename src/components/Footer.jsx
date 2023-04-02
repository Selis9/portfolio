import { FiLinkedin, FiGithub, FiInstagram, FiMail  } from 'react-icons/fi'

const actions = [
  { icon: <FiLinkedin size="2em"/>, name: 'Linkedin', url:'https://www.linkedin.com/in/tonyandrewkang/'},
  { icon: <FiGithub size="2em"/>, name: 'Github', url:'https://github.com/Selis9' },
  { icon: <FiInstagram size="2em"/>, name: 'Instagram', url:'https://www.instagram.com/depth.of.tonee/'  },
  { icon: <FiMail size="2em"/>, name: 'Email', url: 'mailto:tony.andrew.kang@gmail.com' },
];

const Footer = () => {
  return (
    <footer className="footer flex justify-center items-center p-4 bg-neutral-900 text-neutral-content">
      <div className="md:place-self-center md:justify-self-end">
        <p>Thanks for stopping by! :D</p>
      </div>
    </footer>
  );
}

export default Footer;