"use client";

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [systemPreference, setSystemPreference] = useState<'light' | 'dark'>('light');
  
  useEffect(() => {
    // Get the initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setSystemPreference(systemPrefersDark ? 'dark' : 'light');
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('system');
    }
    
    // Apply the theme
    applyTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemPreference(e.matches ? 'dark' : 'light');
      if (theme === 'system') {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);
  
  const applyTheme = (newTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };
  
  const toggleTheme = () => {
    let newTheme: 'light' | 'dark' | 'system';
    
    // Cycle through themes: light -> dark -> system -> light
    if (theme === 'light') {
      newTheme = 'dark';
      localStorage.setItem('theme', 'dark');
      applyTheme('dark');
    } else if (theme === 'dark') {
      newTheme = 'system';
      localStorage.removeItem('theme');
      applyTheme(systemPreference);
    } else {
      newTheme = 'light';
      localStorage.setItem('theme', 'light');
      applyTheme('light');
    }
    
    setTheme(newTheme);
  };
  
  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
    >
      {theme === 'dark' ? (
        <FaMoon className="icon-primary" size={20} />
      ) : theme === 'light' ? (
        <FaSun className="icon-primary" size={20} />
      ) : (
        systemPreference === 'dark' ? (
          <FaMoon className="icon-primary" size={20} />
        ) : (
          <FaSun className="icon-primary" size={20} />
        )
      )}
    </button>
  );
} 