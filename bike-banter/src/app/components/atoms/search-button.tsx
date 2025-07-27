import { useState, useRef, useEffect } from 'react';

export default function SearchButton() {
    const [expanded, setExpanded] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleToggle = () => {
        setExpanded(true);
    };
    useEffect(() => {
        if (expanded && inputRef.current) {
            inputRef.current.focus();
        }
    }, [expanded]);

    return (
        <div className="relative">
            {!expanded ? (
                <button
                    onClick={handleToggle}
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-search"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                </button>
            ) : (
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="Search..."
                    className="h-8 pl-3 pr-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-48"
                    onBlur={() => setExpanded(false)}
                />
            )}
        </div>
    );
}