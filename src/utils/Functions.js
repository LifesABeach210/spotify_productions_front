export const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
export const customDispatchRequest = async (
  token,
  dispatch,
  reduxFunction,
  setterFunction = undefined
) => {
  const response = await dispatch(reduxFunction({ payload: { token } }));
  console.log(response, "CUSTOM_DISPATCH");
  if (setterFunction !== undefined) {
    setterFunction(response);
    return;
  }
  return;
};

export const getSpotifyTokenAfterTimeExpires = (time) => {
  setTimeout(() => {
    if (localStorage.getItem("spotify_access_token")) {
      localStorage.removeItem("spotify_access_token");
      window.location.href = "http://localhost:3000/sign-in";
      return;
    } else {
      return;
    }
  }, time);
};

export const getCurrentDateTimeHours = (
  setIsAfternoon,
  setIsMorning,
  setIsEvening,
  setIsNightTime
) => {
  const currentDate = new Date().getHours();
  console.log(currentDate, "DATE");
  if (currentDate >= 5 && currentDate <= 11) {
    setIsMorning(true);
    setIsAfternoon(false);
    setIsEvening(false);
    setIsNightTime(false);
    return;
  }
  if (currentDate >= 12 && currentDate <= 17) {
    setIsAfternoon(true);
    setIsMorning(false);
    setIsEvening(false);
    setIsNightTime(false);
    return;
  }
  if (
    (currentDate >= 21 && currentDate <= 23) ||
    (currentDate >= 0 && currentDate <= 5)
  ) {
    setIsNightTime(true);
    setIsAfternoon(false);
    setIsMorning(false);
    setIsEvening(false);

    return;
  }
  if (currentDate >= 17 && currentDate <= 20) {
    setIsEvening(true);
    setIsAfternoon(false);
    setIsMorning(false);
    setIsNightTime(false);
    return { evening: true };
  }
};
export const handlePrevClick = (arrLength, setIndx, currIdx) => {
  if (currIdx === 0) {
    return;
  } else {
    setIndx(currIdx - 1);
  }
};
export const handleNextClick = (arrLength, setIndx, currIdx) => {
  if (currIdx < arrLength) {
    return setIndx(currIdx + 1);
  }
  if (currIdx === arrLength) {
    return;
  } else {
    setIndx(currIdx + 1);
  }
};

export const getAccessToken = () => {
  const LOCALSTORAGE_KEYS = {
    accessToken: "spotify_access_token",
    refreshToken: "spotify_refresh_token",
    expireTime: "spotify_token_expire_time",
    timestamp: "spotify_token_timestamp",
  };
  const LOCALSTORAGE_VALUES = {
    accessToken: window.localStorage.getItem(
      LOCALSTORAGE_KEYS.accessToken
    ),
    refreshToken: window.localStorage.getItem(
      LOCALSTORAGE_KEYS.refreshToken
    ),
    expireTime: window.localStorage.getItem(LOCALSTORAGE_KEYS.expireTime),
    timestamp: window.localStorage.getItem(LOCALSTORAGE_KEYS.timestamp),
  };
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const queryParams = {
    [LOCALSTORAGE_KEYS.accessToken]: urlParams.get("access_token"),
    [LOCALSTORAGE_KEYS.refreshToken]: urlParams.get("refresh_token"),
    [LOCALSTORAGE_KEYS.expireTime]: urlParams.get("expires_in"),
  };

  if (
    LOCALSTORAGE_VALUES.accessToken &&
    LOCALSTORAGE_VALUES.accessToken !== "undefined"
  ) {
    return LOCALSTORAGE_VALUES.accessToken;
  }

  // If there is a token in the URL query params, user is logging in for the first time
  if (queryParams[LOCALSTORAGE_KEYS.accessToken]) {
    // Store the query params in localStorage
    for (const property in queryParams) {
      window.localStorage.setItem(property, queryParams[property]);
    }
    // Set timestamp
    window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());
    // Return access token from query params
    return queryParams[LOCALSTORAGE_KEYS.accessToken];
  }

  // We should never get here!
  return false;
};
