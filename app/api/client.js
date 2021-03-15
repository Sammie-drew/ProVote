import {create} from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.122.1:3030/api',
});

export {apiClient};
