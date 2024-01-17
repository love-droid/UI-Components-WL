import { useState } from 'react';

export default function Document_Uploader() {
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileUpload = () => {
    // Implement your file upload logic here
    // For demonstration purposes, I'll just set a flag to indicate the file is uploaded
    setFileUploaded(true);
  };

  return (
    <div className="flex items-center">
      {/* Left side: Button for uploading cancelled cheque document */}
      <button
        onClick={handleFileUpload}
        className="mr-2 px-4 py-2 bg-indigo-600 text-white rounded-md focus:outline-none"
      >
        Upload Cheque
      </button>

      {/* Right side: Search bar to indicate file upload status */}
      <div className="flex-grow">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email
        </label>
        <div className="relative mt-2">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="you@example.com"
          />
          {/* File upload status indicator */}
          {fileUploaded && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
