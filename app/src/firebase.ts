import { initializeApp } from "firebase/app";
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { firebaseConfig } from './firebase-config';
import { listMovies, listAllMoviesRef, subscribe, executeMutation, createMovieRef, getOldestMovie, AspectRatio } from '@dataconnect/generated';

// ...inne opcjonalne pola...

const app = initializeApp(firebaseConfig);

// Inicjalizacja Data Connect SDK
const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);

// Make calls from your app

function onBtnClick() {
  // To wywoła wygenerowaną funkcję JS i wykona zapytanie HTTP do serwera.
  listMovies().then(data => showInUI(data)); // == executeQuery(listMoviesRef);
}

const listRef = listAllMoviesRef();

// subscribe wywoła zapytanie natychmiast, jeśli nie było wcześniej execute
subscribe(listRef, ({ data }) => {
  updateUIWithMovies(data.movies);
});

await executeMutation(createMovieRef({ movie: 'Empire Strikes Back' }));
await listMovies(); // zaktualizuje subskrypcję powyżej

const queryResult = await getOldestMovie();

if (queryResult.data) {
  // możemy użyć switch z "default", by obsłużyć nieoczekiwane wartości
  const oldestMovieAspectRatio = queryResult.data.originalAspectRatio;
  switch (oldestMovieAspectRatio) {
    case AspectRatio.ACADEMY:
    case AspectRatio.WIDESCREEN:
    case AspectRatio.ANAMORPHIC:
      console.log('This movie was filmed in Academy, widescreen or anamorphic aspect ratio!');
      break;
    default:
      // obsłuży FULLSCREEN, UNAVAILABLE, _UNKNOWN i nieznane wartości (np. CINEMASCOPE)
      console.log('This movie was was NOT filmed in Academy, widescreen or anamorphic.');
      break;
  }

  // alternatywnie: sprawdź, czy enum jest znany
  if (!Object.values(AspectRatio).includes(oldestMovieAspectRatio)) {
    console.log(`Unrecognized aspect ratio: ${oldestMovieAspectRatio}`);
  }
} else {
  console.log("no movies found!");
}
      break;
  }

  // alternatywnie: sprawdź, czy enum jest znany
  if (!Object.values(AspectRatio).includes(oldestMovieAspectRatio)) {
    console.log(`Unrecognized aspect ratio: ${oldestMovieAspectRatio}`);
  }
} else {
  console.log("no movies found!");
}
