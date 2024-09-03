import React from "react";
import { Link } from "react-router-dom";

export const MostSearched = () => {
    return (
      <div className="flex flex-col w-full items-center">
        <h1 className="text-[40px] font-bold">Most Searched Manga</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-6 ">
        {[...Array(8)].map((_, index) => (
          <Link to="/MangaDetails" key={index} className="group relative block bg-black">
            <img
              alt=""
              src="https://c4.wallpaperflare.com/wallpaper/431/688/960/sukuna-ryomen-sukuna-jujutsu-kaisen-anime-boys-manga-hd-wallpaper-preview.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
  
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Manga Hinog</p>
              <p className="text-xl font-bold text-white sm:text-2xl">BOSS NIL</p>
  
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                    quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
    );
  };