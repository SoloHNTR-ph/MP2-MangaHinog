import React from "react";


export function CardSearch() {
    return (
        <div className="border-solid border-2 border-black">
        <div className="flex">
          <div>
            <img src="./placeholder.png" alt="" className="rounded max-w-sm h-36" />
          </div>
          <div>
            <div className="flex justify-between">
              <h1 className="font-extrabold">Manga Title</h1>
              <div className="flex justify-evenly">
                <div className="px-1">
                  ranking
                </div>
                <div className="px-3">
                Status
              </div>
              </div>
            </div>
            <div className="flex">
              <p>Genre</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                dignissimos distinctio, consequuntur excepturi error aliquam
                assumenda enim mollitia. Deserunt dolorem quam assumenda officia
                soluta nulla odit id repudiandae magni mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export function MangaCard() {
    return (
        <div className="group relative block bg-black">
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
          </div>
    );
} 