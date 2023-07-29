import { useEffect, useState } from "react";

const useTheme = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    // Function to handle changes in theme preference
    const handleChange = () => {
      const userPref = window.localStorage.getItem("theme");

      if (userPref) {
        setMode(userPref);
      } else {
        setMode(window.mediaQuery ? "dark" : "light");
      }
    };
    handleChange()

    // Create a media query to detect prefered color scheme
    const mediaQuery = window.matchMedia(preferDarkQuery);
    mediaQuery.addEventListener("change", handleChange);
    handleChange(); // Initial check when the component mounts

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []); // Run this only once when the component mounts

  useEffect(() => {
    // Update local storage whenever 'mode' changes
    window.localStorage.setItem("theme", mode);

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]); // Run this whenever 'mode' changes

  return [mode, setMode];
};

export default useTheme;
