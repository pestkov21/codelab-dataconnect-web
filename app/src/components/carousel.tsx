/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useEffect, useState } from 'react';
import MovieCard from '@/components/moviecard';

interface CarouselProps {
  title: string;
  movies: {
    id: string;
    title?: string;
    imageUrl?: string;
    rating?: number | null;
    genre?: string | null;
    tags?: string[] | null;
  }[];
}
interface PaginatedCarouselProps {
  title: string;
  fetchMovies: (limit: number, offset: number) => Promise<{
    id: string;
    title?: string;
    imageUrl?: string;
    rating?: number | null;
    genre?: string | null;
    tags?: string[] | null;
  }[]>;
  itemsPerPage?: number;
}

export function Carousel({ title, movies }: CarouselProps) {
  return (
    <section className="carousel py-8">
      <h2 className="text-gray-200 text-2xl font-bold mb-4">{title}</h2>
      <div className="carousel__container flex overflow-x-auto space-x-4 overflow-y-clip">
        {movies.map((movie) => (
          <div className="flex-shrink-0" key={movie.id}>
            <MovieCard
              id={movie.id}
              title={movie.title || 'TBA'}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
              genre={movie.genre}
              tags={movie.tags}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export  function PaginatedCarousel({ title, fetchMovies, itemsPerPage = 5 }: PaginatedCarouselProps) {
  const [page, setPage] = useState(0);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetchMovies(itemsPerPage, page * itemsPerPage).then(setMovies);
  }, [page, itemsPerPage, fetchMovies]);

  const handleNext = () => {
    if (movies.length > 0) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="carousel py-8">
      <h2 className="text-gray-200 text-2xl font-bold mb-4">{title}</h2>
      <div className="carousel__container flex space-x-4 overflow-hidden">
        {movies.map((movie) => (
          <div className="flex-shrink-0" key={movie.id}>
            <MovieCard
              id={movie.id}
              title={movie.title || 'TBA'}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
              genre={movie.genre}
              tags={movie.tags}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          onClick={handlePrev}
          disabled={page === 0}
        >
          Previous
        </button>
        <span className="text-gray-300">
          Page {page + 1}
        </span>
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          onClick={handleNext}
          disabled={movies.length === 0}
        >
          Next
        </button>
      </div>
    </section>
  );
}
