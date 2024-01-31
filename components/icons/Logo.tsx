import React from 'react'; // Import React for functional component

const Logo = ({ className = '', ...props }) => (
  <img
    src="/logo.png" // Use the path to the logo.png image
    alt="My Calendy Logo" // Provide descriptive alt text
    width="32"
    height="32"
    className={className}
    {...props}
  />
);

export default Logo;
