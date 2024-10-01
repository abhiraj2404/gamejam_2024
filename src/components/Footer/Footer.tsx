import "./Footer.css";
import Tilty from "react-tilty";
import { NeonGradientCard } from "../magicui/neon-gradient-card";
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-dark text-white py-10 dark ml-6 mr-6">
      <footer>
        <div className="container mx-auto px-6 border border-[#e81cff] rounded-lg glow p-8 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            
            <div className="item">
              <h3 className="text-lg font-bold text-[#e81cff] glow">Domains</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:opacity-80">Web App</a></li>
                <li><a href="#" className="hover:opacity-80">Cybersecurity</a></li>
                <li><a href="#" className="hover:opacity-80">Data Science</a></li>
                <li><a href="#" className="hover:opacity-80">AI/ML</a></li>
                <li><a href="#" className="hover:opacity-80">PR & Design</a></li>
              </ul>
            </div>

            
            <div className="item">
              <h3 className="text-lg font-bold text-[#e81cff] glow">About</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:opacity-80">Company</a></li>
                <li><a href="#" className="hover:opacity-80">Team</a></li>
                <li><a href="#" className="hover:opacity-80">Careers</a></li>
              </ul>
            </div>

            {/* Club Description */}
            <div className="item text">
              <h3 className="text-lg font-bold text-[#e81cff] glow">Iota Club</h3>
              <p className="mt-4 opacity-70">
                Iota is a community-driven club focused on fostering talent in 
                technology and innovation. We specialize in Web Apps, 
                Cybersecurity, Data Science, AI/ML, and creative PR & Design. 
                Our mission is to empower learners to grow and create impactful 
                solutions for real-world problems.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-white hover:opacity-80">
              <FaFacebookF className="text-2xl hover:text-[#e81cff] transition duration-300" />
            </a>
            <a href="#" className="text-white hover:opacity-80">
              <FaTwitter className="text-2xl hover:text-[#e81cff] transition duration-300" />
            </a>
            <a href="#" className="text-white hover:opacity-80">
              <FaSnapchatGhost className="text-2xl hover:text-[#e81cff] transition duration-300" />
            </a>
            <a href="#" className="text-white hover:opacity-80">
              <FaInstagram className="text-2xl hover:text-[#e81cff] transition duration-300" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center mt-6 text-sm opacity-50">
            Iota Club © 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
