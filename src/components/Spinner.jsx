import React from 'react';

const Spinner = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div
        className="w-12 h-12 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"
        role="status"
        aria-label="Loading"
      ></div>
      <p className="mt-2 text-gray-500 text-sm">Loading...</p>
    </div>
  );
};

export default Spinner;
