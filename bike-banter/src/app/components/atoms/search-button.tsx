export default function SearchButton() {
    return (
        <a className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-100" href="/search">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search">
                <circle cx="11" cy="11" r="8">
                </circle>
                <path d="m21 21-4.3-4.3">
                </path>
            </svg>
        </a>
    );
}