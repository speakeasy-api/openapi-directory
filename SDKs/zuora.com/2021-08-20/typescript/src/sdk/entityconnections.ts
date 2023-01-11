import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class EntityConnections {
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
   * getEntityConnections - Multi-entity: List connections
   *
   * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
   * 
   * Retrieves information about certain connections for a specified entity. You can specify the entity to retrieve in the `Zuora-Entity-Ids` request header.
   * 
   * You can retrieve:
   *  - Inbound connections
   *  - Outbound connections
   *  - Both inbound and outbound connections
   * 
   * ## User Access Permission
   * You can make the call as any entity user. 
   * 
  **/
  getEntityConnections(
    req: operations.GetEntityConnectionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEntityConnectionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEntityConnectionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/entity-connections";
    
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
        const res: operations.GetEntityConnectionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getEntityConnectionsResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postEntityConnections - Multi-entity: Initiate a connection request
   *
   * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
   * 
   * Initiates a connection request from a source entity to a target entity.
   * 
   * ## User Access Permission
   * You must make the call as a source entity administrator. Also, this administrator must have permission to access to the target entity.
   * 
  **/
  postEntityConnections(
    req: operations.PostEntityConnectionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostEntityConnectionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostEntityConnectionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/entity-connections";

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
        const res: operations.PostEntityConnectionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postEntityConnectionsResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putEntityConnectionsAccept - Multi-entity: Accept a connection request
   *
   * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
   * 
   * Accepts a connection request.
   * 
   * ## User Access Permission
   * You must make the call as an entity administrator to accept a connection request.
   * 
  **/
  putEntityConnectionsAccept(
    req: operations.PutEntityConnectionsAcceptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutEntityConnectionsAcceptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutEntityConnectionsAcceptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/entity-connections/{connection-id}/accept", req.pathParams);
    
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
        const res: operations.PutEntityConnectionsAcceptResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.putEntityConnectionsAcceptResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putEntityConnectionsDeny - Multi-entity: Deny a connection request
   *
   * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
   * 
   * Denies a connection request.
   * 
   * ## User Access Permission
   * You must make the call as an entity administrator to deny a connection request.
   * 
  **/
  putEntityConnectionsDeny(
    req: operations.PutEntityConnectionsDenyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutEntityConnectionsDenyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutEntityConnectionsDenyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/entity-connections/{connection-id}/deny", req.pathParams);
    
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
        const res: operations.PutEntityConnectionsDenyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.putEntityConnectionsDenyResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putEntityConnectionsDisconnect - Multi-entity: Disconnect a connection
   *
   * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
   * 
   * Disconnects an established connection. If you have shared objects from a global entity to a target entity, disconnecting the connection will break the mapping relationship between these entities and cannot be recovered later.
   * 
   * ## User Access Permission
   * You must make the call as an administrator of the target entity or source entity.
   * 
  **/
  putEntityConnectionsDisconnect(
    req: operations.PutEntityConnectionsDisconnectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutEntityConnectionsDisconnectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutEntityConnectionsDisconnectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/entity-connections/{connection-id}/disconnect", req.pathParams);
    
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
        const res: operations.PutEntityConnectionsDisconnectResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.putEntityConnectionsDisconnectResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
