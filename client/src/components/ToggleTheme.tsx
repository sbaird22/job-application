import React, { useEffect, useState } from "react";

const ToggleTheme = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const toggleTheme = () => {
        if (!isClient) return;
        const theme = document.documentElement.getAttribute("data-theme");
        document.documentElement.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
    };

    return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ToggleTheme;
