
import { BarsArrowUpIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export default function SearchBar() {
return (
  <div>
    
    <div className="mt-2 flex rounded-md shadow-sm">
      {/* Search input container */}
      <div className="relative flex flex-grow items-stretch focus-within:z-10">
        {/* Search input */}
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="John Smith"
        />
      </div>
      {/* Sort button */}
      <button
        type="button"
        className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 bg-blue-600 hover:bg-blue-800"
      >
        {/* Icon to the left of the button text */}
        {/* <BarsArrowUpIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
        <MagnifyingGlassIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
        {/* Button text */}
      </button>
    </div>
  </div>
)
}
