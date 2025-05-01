import Image from "next/image";

export default function About() {
    return (<nav className="flex h-[70px] items-center justify-between border-b border-gray-200 p-4">
            <div className="flex items-center">
              <button className="mr-2 -ml-1 cursor-pointer rounded-full p-2 hover:bg-gray-100" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«r0»" data-state="closed" data-slot="sheet-trigger">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
              <h1 className="flex items-center text-xl font-semibold capitalize"><Image
              className=""
              src="/bike-banter.svg"
              alt="Bike Banter logo"
              width={200}
              height={38}
              priority
              />
                <span className="ml-2 text-sm text-gray-400">3
                </span>
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <a className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-100" href="/f/inbox/new">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-pen">
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                </svg>
              </a>
              <a className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-100" href="/search">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search">
                  <circle cx="11" cy="11" r="8">
                  </circle>
                  <path d="m21 21-4.3-4.3">
                  </path>
                </svg>
              </a>
            </div>
          </nav>
        )
}