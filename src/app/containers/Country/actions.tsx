import { createAction } from '@reduxjs/toolkit';

const fetchCountry = createAction<string | undefined>('FETCH_COUNTRY_REQUEST');

const fetchCountrySuccess = createAction('FETCH_COUNTRY_SUCCESS', country => {
  return {
    payload: {
      country,
    },
  };
});

const fetchCountryError = createAction('FETCH_COUNTRY_ERROR', error => {
  return {
    payload: {
      error,
    },
  };
});

export const actions = {
  fetchCountry,
  fetchCountrySuccess,
  fetchCountryError,
};
