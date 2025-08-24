import React, { useEffect, useState } from "react"

const DarkMode = () => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <div className="h-screen w-full flex items-center justify-center transition-colors duration-700 bg-white text-black dark:bg-black dark:text-white">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-8 tracking-wide">
          {theme === "light" ? "☀️ Light Mode Active" : "🌙 Dark Mode Active"}
        </h1>

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-8 py-4 rounded-full text-xl font-bold shadow-lg transition-all duration-500 bg-yellow-400 text-black hover:bg-yellow-500 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        >
          {theme === "light" ? "Switch to Dark 🌙" : "Switch to Light ☀️"}
        </button>
      </div>
    </div>
  )
}

export default DarkMode
