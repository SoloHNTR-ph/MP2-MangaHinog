import React from "react";

export function CardSearch({
  imageUrl,
  title,
  ranking,
  status,
  genre,
  synopsis,
}) {
  return (
    <div className="border-solid border-2 border-black ">
      <div className="flex">
        <div>
          <img src={imageUrl} alt="" className="rounded max-w-sm h-36" />
        </div>
        <div>
          <div className="flex justify-between">
            <h1 className="font-extrabold">{title}</h1>
            <div className="flex justify-evenly">
              <div className="px-1">{ranking}</div>
              <div className="px-3">{status}</div>
            </div>
          </div>
          <div className="flex">
            <p>{genre}</p>
          </div>
          <div>
            <p>{synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MangaCard({ title, synopsis, imageUrl }) {
  return (
    <div className="group relative block bg-black w-full h-svh rounded-lg overflow-hidden">
      <img
        alt={title}
        src={imageUrl}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-lg"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export function FeatureCard({
  imageUrl,
  title,
 
  genres,
  status,
  description,
}) {
  return (
    <div>
      <div className="mt-3 mx-5">
        <div className="flex w-full gap-9">
          <div className="w-48">
            <img src={imageUrl} alt={title} />
          </div>
          <div className="flex flex-col w-full h-auto justify-between">
            <div className="flex flex-col justify-between w-full">
              <h1 className="text-6xl font-extrabold">{title}</h1>
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <h3>{genres}</h3>
                </div>
                <div className="flex">
                  <h3>{status}</h3>
                </div>
              </div>
            </div>
            <div>
              <h3>Summary:</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BrowseCard({ title, synopsis, imageUrl }) {
  return (
    <div className="group relative block bg-black w-full h-96">
      <img
        alt={title}
        src={imageUrl}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>

        <div className="mt-auto sm:mt-auto lg:mt-auto">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
}