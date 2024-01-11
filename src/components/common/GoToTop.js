// ScrollToTop.js
import React, { useState, useEffect, memo, useCallback } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the user has scrolled down enough to show the "scroll to top" button
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 1000);
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div onClick={scrollToTop} style={{ visibility: (isVisible) ? "visible": "hidden", position: "fixed", bottom: "20px", right: "20px", cursor: "pointer", backgroundColor: "red", color: "white", borderRadius: "100%", padding: "20px", fontSize: "25px" }}>
      <i className="fi fi-sr-angle-up"></i>
    </div>
  );
};

export default memo(ScrollToTop);
