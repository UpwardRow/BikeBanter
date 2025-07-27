export default function AccountButton() {
    return (
        <div className="flex items-center space-x-2">
            <a className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-100" href="/account">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-icon lucide-circle-user"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>
            </a>
        </div>
    );
}