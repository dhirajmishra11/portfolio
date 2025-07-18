import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/dhiraj--mishra",
      style: 'social-linkedin',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/dhirajmishra11",
      style: 'social-github',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:work.dhirajmishra@gmail.com",
      style: 'social-mail',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href:  '/resume.pdf',
      style: 'social-resume',
      download: true,
    },
  ];

  return (
    <div className="social-links-container">
      <ul className="social-links-list">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`social-links-item ${style}`}
          >
            <a
              href={href}
              className="social-links-anchor"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;