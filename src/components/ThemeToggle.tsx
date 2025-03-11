"use client";

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

interface ThemeToggleProps {
  size?: 'sm' | 'md' | 'lg';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'custom';
  shape?: 'circle' | 'square';
  corner?: 'sm' | 'md' | 'lg'; // For controlling square corners
  className?: string;
}

export default function ThemeToggle({ 
  size = 'md', 
  position = 'top-right', 
  shape = 'circle',
  corner = 'md',
  className = '' 
}: ThemeToggleProps) {
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
  
  // Determine which icon to show
  const showDarkIcon = theme === 'dark' || (theme === 'system' && systemPreference === 'dark');
  
  // Icon size based on size prop and screen size
  const getIconSize = () => {
    if (isMobile) return size === 'sm' ? 16 : size === 'md' ? 18 : 20;
    return size === 'sm' ? 18 : size === 'md' ? 20 : 24;
  };
  
  // Size classes mapped to CSS variables
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };
  
  // Position classes with fallback to top-right if invalid
  const validPosition = ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'custom'].includes(position) 
    ? position 
    : 'top-right';
  
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'custom': '',
  };
  
  // Shape and corner classes
  const shapeCornerClass = shape === 'circle' ? 'shape-circle' : `shape-square rounded-${corner}`;
  
  // Icon color based on theme - using CSS variables for color
  const iconColor = !showDarkIcon ? 'var(--background)' : 'var(--foreground)';
  
  // For placeholder when not mounted
  if (!mounted) {
    return (
      <div 
        className={`theme-toggle-placeholder ${sizeClasses[size]} ${positionClasses[validPosition]} ${shapeCornerClass} ${className}`}
        aria-hidden="true" 
      />
    );
  }
  
  return (
    <button 
      onClick={toggleTheme}
      className={`theme-toggle interactive-toggle ${sizeClasses[size]} ${positionClasses[validPosition]} ${shapeCornerClass} ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
      title={`Current theme: ${theme === 'system' ? `System (${systemPreference})` : theme}`}
    >
      <div className={`theme-toggle-icon ${isRotating ? 'rotating' : ''}`}>
        {showDarkIcon ? (
          <FaMoon size={getIconSize()} color={iconColor} />
        ) : (
          <FaSun size={getIconSize()} color={iconColor} />
        )}
      </div>
    </button>
  );
} 
