const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');
const OrderDirection = {

  ASC: "ASC",

  DESC: "DESC",
}
  exports.OrderDirection = OrderDirection;

const connectorConfig = {
  connector: 'movie-connector',
  service: 'firebase-web-quickstart',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

function listMoviesRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'ListMovies', inputVars);
}
exports.listMoviesRef = listMoviesRef;
exports.listMovies = function listMovies(dcOrVars, vars) {
  return executeQuery(listMoviesRef(dcOrVars, vars));
};

function latestMoviesRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'LatestMovies', inputVars);
}
exports.latestMoviesRef = latestMoviesRef;
exports.latestMovies = function latestMovies(dcOrVars, vars) {
  return executeQuery(latestMoviesRef(dcOrVars, vars));
};

function getMovieByIdRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetMovieById', inputVars);
}
exports.getMovieByIdRef = getMovieByIdRef;
exports.getMovieById = function getMovieById(dcOrVars, vars) {
  return executeQuery(getMovieByIdRef(dcOrVars, vars));
};

function getActorByIdRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetActorById', inputVars);
}
exports.getActorByIdRef = getActorByIdRef;
exports.getActorById = function getActorById(dcOrVars, vars) {
  return executeQuery(getActorByIdRef(dcOrVars, vars));
};

function getCurrentUserRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetCurrentUser');
}
exports.getCurrentUserRef = getCurrentUserRef;
exports.getCurrentUser = function getCurrentUser(dc) {
  return executeQuery(getCurrentUserRef(dc));
};

function getIfRecommendedMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetIfRecommendedMovie', inputVars);
}
exports.getIfRecommendedMovieRef = getIfRecommendedMovieRef;
exports.getIfRecommendedMovie = function getIfRecommendedMovie(dcOrVars, vars) {
  return executeQuery(getIfRecommendedMovieRef(dcOrVars, vars));
};

function searchAllRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'SearchAll', inputVars);
}
exports.searchAllRef = searchAllRef;
exports.searchAll = function searchAll(dcOrVars, vars) {
  return executeQuery(searchAllRef(dcOrVars, vars));
};

function searchMovieDescriptionUsingL2similarityRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'SearchMovieDescriptionUsingL2Similarity', inputVars);
}
exports.searchMovieDescriptionUsingL2similarityRef = searchMovieDescriptionUsingL2similarityRef;
exports.searchMovieDescriptionUsingL2similarity = function searchMovieDescriptionUsingL2similarity(dcOrVars, vars) {
  return executeQuery(searchMovieDescriptionUsingL2similarityRef(dcOrVars, vars));
};

function upsertUserRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'UpsertUser', inputVars);
}
exports.upsertUserRef = upsertUserRef;
exports.upsertUser = function upsertUser(dcOrVars, vars) {
  return executeMutation(upsertUserRef(dcOrVars, vars));
};

function addRecommendedMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'AddRecommendedMovie', inputVars);
}
exports.addRecommendedMovieRef = addRecommendedMovieRef;
exports.addRecommendedMovie = function addRecommendedMovie(dcOrVars, vars) {
  return executeMutation(addRecommendedMovieRef(dcOrVars, vars));
};

function deleteRecommendedMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'DeleteRecommendedMovie', inputVars);
}
exports.deleteRecommendedMovieRef = deleteRecommendedMovieRef;
exports.deleteRecommendedMovie = function deleteRecommendedMovie(dcOrVars, vars) {
  return executeMutation(deleteRecommendedMovieRef(dcOrVars, vars));
};

function addReviewRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'AddReview', inputVars);
}
exports.addReviewRef = addReviewRef;
exports.addReview = function addReview(dcOrVars, vars) {
  return executeMutation(addReviewRef(dcOrVars, vars));
};

function deleteReviewRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'DeleteReview', inputVars);
}
exports.deleteReviewRef = deleteReviewRef;
exports.deleteReview = function deleteReview(dcOrVars, vars) {
  return executeMutation(deleteReviewRef(dcOrVars, vars));
};

