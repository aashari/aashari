"use client";

import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa';

// Simplified props - only keeping className as it's a standard prop
interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ 
  className = '' 
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [systemPreference, setSystemPreference] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
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
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);
  
  const applyTheme = (newTheme: 'light' | 'dark') => {
    if (typeof document === 'undefined') return;
    
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
  
  // Determine which theme class to apply
  const themeClass = theme === 'light' 
    ? 'light-mode' 
    : theme === 'dark' 
      ? 'dark-mode' 
      : 'system-mode';
  
  // For placeholder when not mounted
  if (!mounted) {
    return (
      <div 
        className={`theme-toggle-placeholder ${className}`}
        aria-hidden="true" 
      />
    );
  }
  
  return (
    <button 
      onClick={toggleTheme}
      className={`theme-toggle interactive-toggle ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
      title={`Current theme: ${theme === 'system' ? `System (${systemPreference})` : theme}`}
    >
      <div className={`theme-toggle-icon ${themeClass}`}>
        {theme === 'light' && <FaSun />}
        {theme === 'dark' && <FaMoon />}
        {theme === 'system' && <FaDesktop />}
      </div>
    </button>
  );
} 
