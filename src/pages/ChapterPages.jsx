import React from "react";

export function ChapterPages() {
  return (
    <div id="" className="container ">
      <h1 id="MangaTitle" className="text-5xl">
        Manga Title
      </h1>
      <div className="sm:col-span-3 w-full justify-center flex">
        <div className="mt-2">
          <select
            id="Chapter-num"
            className="block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 "
          >
            <option>Chapter 000</option>
          </select>
        </div>
        <div className="flex">
          <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
      <div className="h-screen bg-no-repeat bg-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" alt="" className="h-full w-auto mx-auto" />
      </div>
    </div>
  );
}
