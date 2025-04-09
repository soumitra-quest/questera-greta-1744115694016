import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-100">BlogSpace</h3>
            <p className="text-gray-400">Share your stories with the world</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BlogSpace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;