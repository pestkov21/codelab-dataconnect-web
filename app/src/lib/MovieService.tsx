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

// import { listMovies, ListMoviesData, OrderDirection } from "@movie/dataconnect";
// import { getMovieById, GetMovieByIdData } from "@movie/dataconnect";
// import { GetActorByIdData, getActorById } from "@movie/dataconnect";

// import { upsertUser } from "@movie/dataconnect";
// import { getCurrentUser, GetCurrentUserData } from "@movie/dataconnect";

// import { addFavoritedMovie, deleteFavoritedMovie, getIfFavoritedMovie } from "@movie/dataconnect";
// import { addReview, deleteReview } from "@movie/dataconnect";

// import { searchAll, SearchAllData } from "@movie/dataconnect";

// import {
//   searchMovieDescriptionUsingL2similarity,
//   SearchMovieDescriptionUsingL2similarityData,
// } from "@movie/dataconnect";

import { getCurrentUser, GetCurrentUserData, OrderDirection, searchAll, SearchAllData, upsertUser } from "@movie/dataconnect";
import { onAuthStateChanged, User } from "firebase/auth";

// Fetch top-rated movies
export function useTopMovies(arg0: { limit: number; orderByRating: OrderDirection; }): { data: any; isLoading: any; } {
  throw new Error('Function not implemented.');
}

// Fetch latest movies
export function useLatestMovies(arg0: { limit: number; orderByReleaseYear: OrderDirection; }): { data: any; isLoading: any; } {
  throw new Error('Function not implemented.');
}

// Fetch movie details by ID
export function useGetMovieById(arg0: { id: string}): { data: any; isLoading: any; error: any } {
  throw new Error('Function not implemented.');
}

// Fetch actor details by ID
export function useGetActorById(arg0: { id: string; }): { error: any; isLoading: any; data: any; } {
  throw new Error('Function not implemented.');
}

// Updates user table when user signs in
export const handleAuthStateChange = (auth: any, setUser: (user: User | null) => void) => {
  return () => {};
};

// Fetch current user profile
// TODO(mtewani): Convert this into a proper hook
export const handleGetCurrentUser = async (): Promise<
  GetCurrentUserData["user"] | null
> => {
  try {
    const response = await getCurrentUser();
    return response.data.user;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

// Add a movie to user's favorites
export const useAddFavoritedMovie = ({ invalidate}: { invalidate: any}): {mutate: any} => {
  throw new Error("Function not implemented.");
}

// Remove a movie from user's favorites
export const useDeleteFavoritedMovie =  ({ invalidate}: { invalidate: any}): {mutate: any} => {
  throw new Error("Function not implemented.");
}

// Check if the movie is favorited by the user
export const useGetIfFavoritedMovie = ({ movieId }: { movieId: string}, { enabled }: { enabled: boolean}): {data: any} => {
  throw new Error("Function not implemented.");
}

// Add a review to a movie
export function useAddReview({ invalidate}: { invalidate: any}): { mutate: any; } {
  throw new Error("Function not implemented.");
}

// Delete a review from a movie
export function useDeleteReview(): { mutate: any; } {
  throw new Error("Function not implemented.");
}

// Function to perform the search using the query and filters
export const handleSearchAll = async (
  searchQuery: string,
  minYear: number,
  maxYear: number,
  minRating: number,
  maxRating: number,
  genre: string
): Promise<SearchAllData | null> => {
  try {
    const response = await searchAll({
      input: searchQuery,
      minYear,
      maxYear,
      minRating,
      maxRating,
      genre,
    });

    return response.data;
  } catch (error) {
    console.error("Error performing search:", error);
    return null;
  }
};


// Perform vector-based search for movies based on description
export const searchMoviesByDescription = async (
  query: string
): Promise<any[]> => {
  return [];
};

export const fetchSimilarMovies = async (
  description: string
): Promise<any[]> => {
  return [];
};
