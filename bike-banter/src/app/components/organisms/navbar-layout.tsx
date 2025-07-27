import Image from "next/image";
import SearchButton from "../atoms/search-button";
import AccountButton from "../atoms/account-button";
import NotificationsButton from "../atoms/notifications-button";
import SettingsButton from "../atoms/settings-button";
import InboxButton from "../atoms/inbox-button";

export default function NavbarLayout() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex h-[70px] bg-white dark:bg-black text-black transition dark:text-white items-center justify-between border-b border-gray-200 p-4">
            <div className="flex items-center">
                <h1 className="flex items-center text-xl font-semibold capitalize">
                    <Image 
                    className="" 
                    src="/bike-banter.svg"
                    alt="Bike Banter logo"
                    width={200}
                    height={38}
                    priority
                    />
                </h1>
            </div>
            <div className="flex items-center justify-between">
                <SearchButton />
                <NotificationsButton />
                <AccountButton />
            </div>
        </nav>
    );
}