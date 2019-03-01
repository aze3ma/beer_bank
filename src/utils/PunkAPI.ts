import BaseAPI from './BaseAPI';

const PunkAPI = new BaseAPI({ url: 'https://api.punkapi.com/v2' });

PunkAPI.createEntity({ name: 'beers' });

export default PunkAPI;
