import React from "react";
import { Chapters } from "../components/Chapters";

export function MangaDetails() {
  return (
    <div>
      <div className="mt-3">
        <div className="flex">
          <div className="w-48">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" alt="" />
          </div>
          <div className="container">
            <h1 className="text-5xl">Manga title</h1>
            <h3>Author</h3>
            <h3>Genre</h3>
            <h3>Status</h3>
          </div>
        </div>
        <div>
          <h3>Summary:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            voluptatum nemo laudantium eos assumenda omnis, minima autem dolorem
            provident accusamus cupiditate facere dignissimos architecto quia
            voluptate odit suscipit reprehenderit dicta.
          </p>
        </div>
        <div>
          <Chapters/>
        </div>
      </div>
    </div>
  );
}
