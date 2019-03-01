import axiosInstance from './axiosService';

class BaseAPI {
  url: any;
  endpoints?: any;

  constructor(values: Object = {}) {
    Object.assign(this, values);
    this.url = values['url'] ? values['url'] : axiosInstance.defaults.baseURL;
    this.endpoints = values['endpoints'] ? values['endpoints'] : {};
  }

  /**
   * Create and store a single entity's endpoints
   * @param { A Entity Object } entity
   */

  createEntity(entity) {
    this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity);
  }

  /**
   * Create the basic endpoints handlers for CRUD operations
   * @param { A Entity Object } entity
   */

  createBasicCRUDEndpoints(entity) {
    const endpoints: any = {};
    const resourceURL = `${this.url}/${entity.name}`;
    endpoints.getAll = query =>
      axiosInstance.get(query ? `${resourceURL}?${query}` : resourceURL, { params: {} });
    endpoints.getOne = ({ id }) => axiosInstance.get(`${resourceURL}/${id}`);
    endpoints.create = toCreate => axiosInstance.post(resourceURL, toCreate);
    endpoints.update = toUpdate => axiosInstance.put(`${resourceURL}/${toUpdate.id}`, toUpdate);
    endpoints.delete = ({ id }) => axiosInstance.delete(`${resourceURL}/${id}`);

    return endpoints;
  }
}

export default BaseAPI;
