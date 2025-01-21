import { AiOutlineSearch } from "react-icons/ai";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  columns: string[];
  selectedColumn: string;
  onColumnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search",
  value,
  onChange,
  columns,
  selectedColumn,
  onColumnChange,
}) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <select
        value={selectedColumn}
        onChange={onColumnChange}
        className="sm:px-2 py-2 text-xs sm:text-sm lg:text-base border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer font-inter"
      >
        {columns.map((column, index) => (
          <option key={index} value={column}>
            {column}
          </option>
        ))}
      </select>
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-2 py-2 pl-10 border text-xs sm:text-sm lg:text-base rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
        <AiOutlineSearch className="absolute left-3 top-3 text-gray-600" />
      </div>
    </div>
  );
};

export default SearchBar;
