import React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '@/components/ui/button';
const ThemeToggle: React.FC = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const isDarkMode = theme === 'dark';
  return <Button onClick={toggleTheme} variant="ghost" size="icon" className="rounded-md" aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
      {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </Button>;
};
export default ThemeToggle;