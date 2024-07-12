import { FooterStyled } from './Footer.styled';
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        // Handle Escape key press if needed
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <FooterStyled>
      <ul>
        <li>© 2024</li>
        <li>
          <p>
            Made by <span className="teamname">GoIT student</span>
          </p>
        </li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;
