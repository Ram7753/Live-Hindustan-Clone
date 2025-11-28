 'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

type SearchBarProps = {
  initialValue?: string;
};

export default function SearchBar({ initialValue }: SearchBarProps) {
  const [query, setQuery] = useState(initialValue ?? '');
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="खोजें..."
          className="w-full py-3 px-6 pr-12 rounded-full border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-400 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-600 transition-colors duration-200 p-1 rounded-full hover:bg-red-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
