import axios from 'axios';
import useCurrentUrl from '@/hooks/currentUrl';

export function findImage(id: any) {
  return axios.get(`${useCurrentUrl()}/imgs/${id}`);
}

export function findRandomImage() {
  // return axios.get(`${useCurrentUrl()}/imgs/random`);
  return fetch(`http://localhost:8080/${useCurrentUrl()}/imgs/random`)
    .then((response) => {
      // 检查响应状态，如果正常，则解析响应数据
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((data) => {
      // 在此处处理解析后的数据
      // console.log(data);
    })
    .catch((error) => {
      // 在此处处理错误
      console.error('There was a problem with the fetch operation:', error);
    });
}
