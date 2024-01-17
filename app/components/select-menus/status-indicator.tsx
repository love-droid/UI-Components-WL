// select menu for status indicator 


import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  { id: 1, name: 'Wade Cooper', online: true },
  { id: 2, name: 'Arlene Mccoy', online: false },
  { id: 3, name: 'Devon Webb', online: false },
  { id: 4, name: 'Tom Cook', online: true },
  { id: 5, name: 'Tanya Fox', online: false },
  { id: 6, name: 'Hellen Schmidt', online: true },
  { id: 7, name: 'Caroline Schultz', online: true },
  { id: 8, name: 'Mason Heaney', online: false },
  { id: 9, name: 'Claudie Smitham', online: true },
  { id: 10, name: 'Emil Schaefer', online: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
    // State for the selected person, initially set to the fourth person in the people array
    const [selected, setSelected] = useState(people[3])
  
    return (
      // Listbox component for creating a dropdown list
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            {/* Label for the Listbox */}
            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Listbox.Label>
            <div className="relative mt-2">
              {/* Button that opens the dropdown list when clicked */}
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  {/* Status indicator for the selected person */}
                  <span
                    aria-label={selected.online ? 'Online' : 'Offline'}
                    className={classNames(
                      selected.online ? 'bg-green-400' : 'bg-gray-200',
                      'inline-block h-2 w-2 flex-shrink-0 rounded-full'
                    )}
                  />
                  {/* Name of the selected person */}
                  <span className="ml-3 block truncate">{selected.name}</span>
                </span>
                {/* Icon indicating that this is a dropdown list */}
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
  
              {/* Transition for the dropdown list */}
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {/* The dropdown list itself */}
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {/* Mapping over the people array to create an option for each person */}
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            {/* Status indicator for this person */}
                            <span
                              className={classNames(
                                person.online ? 'bg-green-400' : 'bg-gray-200',
                                'inline-block h-2 w-2 flex-shrink-0 rounded-full'
                              )}
                              aria-hidden="true"
                            />
                            {/* Name of this person */}
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {person.name}
                              {/* Text for screen readers indicating this person's online status */}
                              <span className="sr-only"> is {person.online ? 'online' : 'offline'}</span>
                            </span>
                          </div>
  
                          {/* Check icon indicating that this person is selected */}
                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    )
}
