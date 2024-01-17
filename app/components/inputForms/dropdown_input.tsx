// https://tailwindui.com/components/application-ui/forms/input-groups
// used above link 


// adjust width of the following component accordingly 

export default function DropdownInput() {
    return (
      <div>
        <label htmlFor="accountType" className="block text-sm font-medium leading-6 text-gray-900">
          Account Type
        </label>
        <div className="mt-2">
          <select
            id="accountType"
            name="accountType"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="personal">Personal</option>
            <option value="business">Business</option>
            <option value="premium">Premium</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
    
    );
  }
  