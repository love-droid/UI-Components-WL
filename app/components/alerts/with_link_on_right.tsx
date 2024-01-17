// Importing the required icon from heroicons package
import { InformationCircleIcon } from '@heroicons/react/20/solid'

// Defining the AlertWithLinkOnRight component
export default function AlertWithLinkOnRight() {
  return (
    // Outer div that sets the background color and padding for the alert
    <div className="rounded-md bg-blue-50 p-4">
      {/* Flex container for the icon and text content */}
      <div className="flex">
        {/* Container for the icon */}
        <div className="flex-shrink-0">
          {/* InformationCircle icon from heroicons */}
          <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
        </div>
        {/* Container for the text content, with left margin to separate it from the icon */}
        <div className="ml-3 flex-1 md:flex md:justify-between">
          {/* Alert message */}
          <p className="text-sm text-blue-700">A new software update is available. See what’s new in version 2.0.4.</p>
          {/* Link to the details */}
          <p className="mt-3 text-sm md:ml-6 md:mt-0">
            {/* The actual link. Replace '#' with your actual link */}
            <a href="#" className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
              Details
              {/* Arrow icon */}
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}