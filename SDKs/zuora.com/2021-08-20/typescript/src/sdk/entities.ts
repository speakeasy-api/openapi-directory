import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Entities {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * deleteEntities - Multi-entity: Delete an entity
   *
   * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
   * 
   * Removes an entity and its sub-entities from a multi-entity hierarchy. You can only remove unprovisioned entities. An error occurred when you remove a provisioned entity.
   * 
   * ## User Access Permission
   * You must make the call as a global entity administrator.   
   * 
  **/
  deleteEntities(
    req: operations.DeleteEntitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEntitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEntitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/entities/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "delete",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteEntitiesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.deletEntityResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getEntities - Multi-entity: List entities
   *
   * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
   * 
   * 
   * Retrieves detailed information of certain entities in a multi-entity hierarchy.
   * 
   * 
   * You can retrieve:
   * 
   *  - Provisioned entities
   *   
   *  - Unprovisioned entities
   *   
   *  - Both provisioned and unprovisioned entities
   * 
   * ## User Access Permission
   * 
   * You can make the call as any entity user.
   * 
  **/
  getEntities(
    req: operations.GetEntitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEntitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEntitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/entities";
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEntitiesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getEntitiesResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getEntityById - Multi-entity: Retrieve an entity
   *
   * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
   * 
   * Retrieves detailed information about a specified entity.
   * 
   * ## User Access Permission
   * You can make the call as any entity user.     
   * 
  **/
  getEntityById(
    req: operations.GetEntityByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEntityByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEntityByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/entities/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEntityByIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getEntitiesResponseTypeWithId = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postEntities - Multi-entity: Create an entity
   *
   * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
   * 
   * Creates an entity in a multi-entity hierarchy.
   * 
   * ## User Access Permission
   * You must make the call as a global entity administrator.
   * 
   * ## Notes
   * * We recommend that you assign only one administrator to manage the entity hierarchy, because an administrator of the global entity by default can only access to the entities that are created by themselves.
   * 
  **/
  postEntities(
    req: operations.PostEntitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostEntitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostEntitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/entities";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostEntitiesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.createEntityResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putEntities - Multi-entity: Update an entity
   *
   * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
   * 
   * Edits the following information about an unprovisioned entity:
   * 
   *  - Name
   *  
   *  - Display name
   *  
   *  - Locale
   *  
   *  - Timezone
   * 
   * ## User Access Permission
   * You must make the call as a global entity administrator.
   * 
   * ## Notes
   * * You are not allowed to edit the locale and time zone of the provisioned entities through the REST API.
   * * You are not allowed to edit the display name of the global entity.
   * 
  **/
  putEntities(
    req: operations.PutEntitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutEntitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutEntitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/entities/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutEntitiesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.updateEntityResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putProvisionEntity - Multi-entity: Provision an entity
   *
   * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
   * 
   * Provisions an entity. You can only provision an entity if its parent entity is provisioned.
   * 
   * ## User Access Permission
   * You must make the call as a global entity administrator. 
   * 
   * ## Notes
   * * Zuora does not allow you to remove a provisioned entity from the multi-entity hierarchy. So before you provision an entity, make sure that you put the entity in the correct place in the multi-entity hierarchy. 
   * 
  **/
  putProvisionEntity(
    req: operations.PutProvisionEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutProvisionEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutProvisionEntityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/entities/{id}/provision", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutProvisionEntityResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.provisionEntityResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
