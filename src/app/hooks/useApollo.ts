import { useMemo } from 'react';
import { initializeApollo } from '../lib/apolloClient';
import { NextRequest } from 'next/server';

export function useApollo(initialState: any,req?:NextRequest) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}