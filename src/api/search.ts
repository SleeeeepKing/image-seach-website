import axios from 'axios';
import useCurrentUrl from '@/hooks/currentUrl';

export function findImage(id: any) {
  return axios.get(`${useCurrentUrl()}/imgs/${id}`);
}

export function findRandomImage() {
  return axios.get(`${useCurrentUrl()}/imgs/random`);
}
