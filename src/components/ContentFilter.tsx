
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
}

interface ContentFilterProps {
  label: string;
  options: FilterOption[];
  value: string;
  onValueChange: (value: string) => void;
}

const ContentFilter = ({ label, options, value, onValueChange }: ContentFilterProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Filter className="w-4 h-4 text-gray-400" />
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-48 bg-gray-800/50 border-gray-700 text-gray-300">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 border-gray-700">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value} className="text-gray-300 hover:bg-gray-700">
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ContentFilter;
