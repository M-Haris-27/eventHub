
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Monitor } from 'lucide-react';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      case 'system':
        return <Monitor className="h-4 w-4" />;
      default:
        return <Sun className="h-4 w-4" />;
    }
  };

  return (
    <Button
      onClick={cycleTheme}
      variant="ghost"
      size="sm"
      className="w-8 h-8 p-0 rounded-full hover:bg-orange-50 dark:hover:bg-gray-800 transition-all"
      title={`Current theme: ${theme}`}
    >
      {getIcon()}
    </Button>
  );
};
