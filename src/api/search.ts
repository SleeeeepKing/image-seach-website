import axios from 'axios';
import useCurrentUrl from '@/hooks/currentUrl';

export interface SearchParams {
  filter?: {
    name?: string;
  };
  sort?: string;
  page?: number;
}
export function findImage(params: SearchParams) {
  return axios.get(`${useCurrentUrl()}/search`, {
    params,
  });
}

export function findRandomImage() {
  return axios.get(`${useCurrentUrl()}/search/random`);
}
