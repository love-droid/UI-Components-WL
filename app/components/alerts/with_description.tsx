// https://tailwindui.com/components/application-ui/feedback/alerts


// Importing the required icon from heroicons package
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

// Defining the AlertWithDescription component

export default function AlertWithDescription() {
  return (
    // Outer div that sets the background color and padding for the alert
    <div className="rounded-md bg-yellow-50 p-4">
      {/* Flex container for the icon and text content */}
      <div className="flex">
        {/* Container for the icon */}
        <div className="flex-shrink-0">
          {/* Exclamation icon from heroicons */}
          <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        {/* Container for the text content, with left margin to separate it from the icon */}
        <div className="ml-3">
          {/* Alert title */}
          <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
          {/* Alert description */}
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              {/* Replace this text with your actual alert description */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
              totam eius aperiam dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}