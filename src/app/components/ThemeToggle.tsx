"use client";

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [systemPreference, setSystemPreference] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
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
      window.removeEventListener('resize', checkMobile);
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
    // Trigger rotation animation
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500);
    
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
  
  // Prevent hydration mismatch by not rendering anything until mounted
  if (!mounted) {
    return <div className="theme-toggle-placeholder" aria-hidden="true" />;
  }
  
  // Determine which icon to show
  const showDarkIcon = theme === 'dark' || (theme === 'system' && systemPreference === 'dark');
  
  // Button size based on screen size
  const buttonSize = isMobile ? 40 : 44;
  const iconSize = isMobile ? 18 : 20;
  
  // Icon color based on theme - using background colors for contrast
  const iconColor = !showDarkIcon ? 'rgb(249, 248, 246)' : '#1A2A44';
  
  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
      title={`Current theme: ${theme === 'system' ? `System (${systemPreference})` : theme}`}
      style={{
        position: 'fixed',
        top: isMobile ? '0.75rem' : '1rem',
        right: isMobile ? '0.75rem' : '1rem',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${buttonSize}px`,
        height: `${buttonSize}px`,
        borderRadius: '50%',
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
        boxShadow: '0 2px 5px var(--shadow)',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        color: iconColor,
        padding: 0
      }}
    >
      <div style={{ 
        transform: isRotating ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.5s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {showDarkIcon ? (
          <FaMoon size={iconSize} color={iconColor} />
        ) : (
          <FaSun size={iconSize} color={iconColor} />
        )}
      </div>
    </button>
  );
} 