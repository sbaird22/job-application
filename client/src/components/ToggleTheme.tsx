import React from "react";

const ToggleTheme = () => {
    const toggleTheme = () => {
        const theme = document.documentElement.getAttribute("data-theme");
        document.documentElement.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
    };

    return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ToggleTheme;
