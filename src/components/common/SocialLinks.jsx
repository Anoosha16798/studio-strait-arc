import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP } from 'react-icons/fa';
import siteData from '../../data/siteData.json';

const SocialLinks = ({ isLight = false }) => {
  const { socialMedia } = siteData.site;

  const socialIcons = [
    // { Icon: FaFacebookF, url: socialMedia.facebook, label: 'Facebook' },
    { Icon: FaInstagram, url: socialMedia.instagram, label: 'Instagram' },
    // { Icon: FaLinkedinIn, url: socialMedia.linkedin, label: 'LinkedIn' },
    // { Icon: FaYoutube, url: socialMedia.youtube, label: 'YouTube' },
    { Icon: FaPinterestP, url: socialMedia.pinterest, label: 'Pinterest' },
  ];

  return (
    <div className="flex items-center gap-3">
      {socialIcons.map(({ Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            isLight
              ? 'bg-white/20 hover:bg-white/30 text-white'
              : 'bg-gray-100 hover:bg-primary-600 text-gray-700 hover:text-white'
          }`}
          aria-label={label}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;