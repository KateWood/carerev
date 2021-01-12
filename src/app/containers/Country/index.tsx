import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { saga } from './saga';
import { key, countryReducer } from './reducer';
import { actions } from './actions';
import { selectCountry, selectLoading, selectError } from './selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { PageWrapper } from 'app/components/PageWrapper';

export function Country(props) {
  console.log(props);
  console.log(props.match.params.id);
  useInjectReducer({ key: key, reducer: countryReducer });
  useInjectSaga({ key: key, saga });

  const country = useSelector(selectCountry);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchCountry(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <PageWrapper>
      {isLoading && <LoadingIndicator small />}
      {country && country.name ? (
        <Fragment>
          <Name key={country.id}>{country.name}</Name>
          <Currency>Currency code: {country.currency_code}</Currency>
        </Fragment>
      ) : error ? (
        <ErrorText>{error}</ErrorText>
      ) : null}
    </PageWrapper>
  );
}

const Name = styled.h1`
  color: blue;
`;

const Currency = styled.p`
  color: blue;
`;

const ErrorText = styled.span`
  color: ${p => p.theme.text};
`;
