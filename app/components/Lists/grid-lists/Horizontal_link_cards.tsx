// Array of people with their details
const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]
  
  // The main component
  export default function Horizontal_link_cards() {
    return (
      // Grid container with responsive columns
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Map through the people array and create a card for each person */}
        {people.map((person) => (
          // Card container with various styles
          <div
            key={person.email}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            {/* Container for the image */}
            <div className="flex-shrink-0">
              {/* Image with rounded corners */}
              <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
            </div>
            {/* Container for the text */}
            <div className="min-w-0 flex-1">
              {/* Link with focus styles */}
              <a href="#" className="focus:outline-none">
                {/* Invisible element for focus styles */}
                <span className="absolute inset-0" aria-hidden="true" />
                {/* Person's name */}
                <p className="text-sm font-medium text-gray-900">{person.name}</p>
                {/* Person's role, truncated if it's too long */}
                <p className="truncate text-sm text-gray-500">{person.role}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    )
  }