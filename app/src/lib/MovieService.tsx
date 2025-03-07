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

import { AddFavoritedMovieData, AddFavoritedMovieVariables, DeleteFavoritedMovieData, DeleteFavoritedMovieVariables, GetCurrentUserData, getCurrentUserRef, GetIfFavoritedMovieData, getIfFavoritedMovieRef, GetIfFavoritedMovieVariables, getMovieByIdRef, ListMoviesData, ListMoviesVariables, OrderDirection, searchAll, SearchAllData, upsertUser } from "@movie/dataconnect";
import { useAddFavoritedMovie, useAddReview, useDeleteFavoritedMovie, useDeleteReview, useGetActorById, useGetCurrentUser, useGetIfFavoritedMovie, useGetMovieById, useListMovies } from "@movie/dataconnect/react";
import { FlattenedMutationResult, FlattenedQueryResult } from "@tanstack-query-firebase/react/data-connect";
import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { FirebaseError } from "firebase/app";
import { onAuthStateChanged, User } from "firebase/auth";

// Fetch top-rated movies
export function useHandleTopMovies(limit: number, orderByRating: OrderDirection): UseQueryResult<FlattenedQueryResult<ListMoviesData, ListMoviesVariables>, FirebaseError> {
  return useListMovies({ limit, orderByRating: orderByRating });
}

// Fetch latest movies
export function useHandleLatestMovies(limit: number, orderByReleaseYear: OrderDirection): { data: any; isLoading: any; } {
  return useListMovies({ limit, orderByReleaseYear});
}

// Fetch movie details by ID
export function useHandleGetMovieById(id: string): { data: any; isLoading: any; error: any } {
  return useGetMovieById({ id });
}

// Fetch actor details by ID
export function useHandleGetActorById(id: string): { error: any; isLoading: any; data: any; } {
  return useGetActorById({ id });
}

// Updates user table when user signs in
export const handleAuthStateChange = (
  auth: any,
  setUser: (user: User | null) => void
) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      setUser(user);
      const username = user.email?.split("@")[0] || "anon";
      await upsertUser({ username });
    } else {
      setUser(null);
    }
  });
};

// Fetch current user profile
export function useHandleGetCurrentUser(
  enabled: boolean
): UseQueryResult<
  FlattenedQueryResult<GetCurrentUserData, undefined>,
  FirebaseError
> {
  return useGetCurrentUser({ enabled });
};

// Add a movie to user's favorites
export const useHandleAddFavoritedMovie = (id: string): UseMutationResult<
  FlattenedMutationResult<AddFavoritedMovieData, AddFavoritedMovieVariables>,
  FirebaseError,
  AddFavoritedMovieVariables
> => {
  return useAddFavoritedMovie({
    invalidate: [getIfFavoritedMovieRef({ movieId: id })],
  });
};

// Remove a movie from user's favorites
export const useHandleDeleteFavoritedMovie = (id: string): UseMutationResult<
  FlattenedMutationResult<
    DeleteFavoritedMovieData,
    DeleteFavoritedMovieVariables
  >,
  FirebaseError,
  DeleteFavoritedMovieVariables
> => {
  return useDeleteFavoritedMovie({
    invalidate: [getIfFavoritedMovieRef({ movieId: id })],
  });
};

// Check if the movie is favorited by the user
export const useHandleGetIfFavoritedMovie = (
  movieId: string,
  enabled: boolean
): UseQueryResult<
  FlattenedQueryResult<GetIfFavoritedMovieData, GetIfFavoritedMovieVariables>,
  FirebaseError
> => {
  return useGetIfFavoritedMovie({ movieId }, { enabled });
};

// Add a review to a movie
export function useHandleAddReview(id: string): {
  mutate: any;
} {
  return useAddReview({ invalidate: [getMovieByIdRef({ id })]});
}

// Delete a review from a movie
export function useHandleDeleteReview(): { mutate: any } {
  return useDeleteReview({ invalidate: [getCurrentUserRef()] });
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
