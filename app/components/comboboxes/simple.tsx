// for reference you can use https://tailwindui.com/components/application-ui/forms/comboboxes 
// simple combobox with icon modification only

import { useState } from 'react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';

// Sample data for people
const people = [
    { id: 1, name: 'Leslie Alexander' },
    { id: 2, name: 'Leslie Alexander' },
    { id: 3, name: 'Leslie Alexander' },
    { id: 4, name: 'Leslie Alexander' },
    { id: 5, name: 'Leslie Alexander' },
    { id: 6, name: 'Leslie Alexander' },
    // More users...
  ]

// Utility function to handle dynamic class names
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Component definition
export default function DropdownInput2() {
  // State for the search query
  const [query, setQuery] = useState('');

  // State for the selected person
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Filter people based on the search query
  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  // Render the component
  return (
    <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
      {/* Label for the Combobox */}
      <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">
        Assigned to
      </Combobox.Label>

      <div className="relative mt-2">
        {/* Input for the Combobox */}
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person) => person?.name}
        />

        {/* Down arrow icon on the right side of the Combobox */}
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {/* Options for the Combobox */}
        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.map((person) => (
              <Combobox.Option
                key={person.id}
                value={person}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    {/* Display name and indicate selection */}
                    <span className={classNames('block truncate', selected && 'font-semibold')}>
                      {person.name}
                    </span>

                    {/* Display check icon for selected option */}
                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
