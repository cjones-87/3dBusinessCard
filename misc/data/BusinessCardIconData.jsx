import React from 'react';
import {
  FaFacebook,
  FaFilePdf,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const BusinessCardIconData = [
  {
    href: 'https://www.seejonesengineer.com/CJsSoftwareEngineeringResume.pdf',
    icon: <FaFilePdf color="#ba68c8" size="2rem" />,
  },
  {
    href: 'mailto:cj@seejonesengineer.com',
    icon: <MdOutlineAlternateEmail color="#ba68c8" size="2rem" />,
  },
  {
    href: 'https://www.linkedin.com/in/cjones1827/',
    icon: <FaLinkedin color="#ba68c8" size="2rem" />,
  },
  {
    href: 'https://www.github.com/cjones-87/',
    icon: <FaGithub color="#ba68c8" size="2rem" />,
  },
  // {
  //   href: 'https://www.instagram.com/seejonesengineer/',
  //   icon: <FaInstagramSquare color="#ba68c8" size="2rem" />,
  // },
  {
    href: 'https://twitter.com/cjonesengineer1',
    icon: <FaTwitter color="#ba68c8" size="2rem" />,
  },
  // {
  //   href: 'https://www.youtube.com/channel/UCIgDLvCc7d6pX1LrhgwLZMw',
  //   icon: <FaYoutube color="#ba68c8" size="2rem" />,
  // },
  // {
  //   href: 'https://www.tiktok.com/@seejonesengineer',
  //   icon: <FaTiktok color="#ba68c8" size="2rem" />,
  // },
  // {
  //   href: 'https://www.facebook.com/seejonesengineer/',
  //   icon: <FaFacebook color="#ba68c8" size="2rem" />,
  // },
];

export default BusinessCardIconData;
