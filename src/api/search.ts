import axios from 'axios';
import useCurrentUrl from '@/hooks/currentUrl';

export function findImage(params: any) {
  // return axios.get(`${useCurrentUrl()}/search`, {
  //   params,
  // });
}

export function findRandomImage() {
  return axios.get(`${useCurrentUrl()}/search/random`);
}
