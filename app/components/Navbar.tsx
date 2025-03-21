// components/Navbar.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { CSSProperties } from 'react'; // Import CSS Properties

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-black text-white h-16 px-8 fixed top-0 w-full z-50">
      {/* Logo */}
      <div className="font-bold text-xl logo">
        <Link href="/" className="logo">Logo</Link>
      </div>
      
      {/* Navigation Links */}
      <ul className="flex gap-6" style={{...styles.ul, marginRight: "2rem"}}>
        <li style={styles.li}>
          <Link href="/" className="aboutme">About Me</Link>
        </li>
        <li style={styles.li}>
          <Link href="/skills" className="skills">Skills</Link>
        </li>
        <li style={{...styles.li, marginRight: "4rem"}}>
          <Link href="/projects" className="projects">Projects</Link>
        </li>

        {/* Social Media Links */}
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/ejpiamonte"
            target="_blank"
            rel="noopener noreferrer"
            className="icon github"
            aria-label="GitHub Profile"
            style={styles.icon}
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/earl-junior-piamonte-b825632ab"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin"
            aria-label="LinkedIn Profile"
            style={styles.icon}
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/ejpp21"
            target="_blank"
            rel="noopener noreferrer"
            className="icon facebook"
            aria-label="Facebook Profile"
            style={styles.icon}
          >
            <FaFacebook size={20} />
          </a>
        </div>
      </ul>
    </nav>
  );
};

// Correct Typing with CSSProperties
const styles: { [key: string]: CSSProperties } = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#000000",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    padding: "1rem 0",
  },
  ul: {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  li: {
    margin: "0 1rem",
    cursor: "pointer",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease",
  },
};

export default Navbar;
