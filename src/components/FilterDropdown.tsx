
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter } from 'lucide-react';

interface FilterDropdownProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'technology', label: 'Technology' },
  { value: 'music', label: 'Music' },
  { value: 'business', label: 'Business' },
  { value: 'art', label: 'Art' },
  { value: 'food', label: 'Food' }
];

const FilterDropdown: React.FC<FilterDropdownProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex items-center gap-2">
      <Filter className="h-5 w-5 text-gray-400" />
      <Select value={selectedCategory} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-48 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-800">
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterDropdown;
