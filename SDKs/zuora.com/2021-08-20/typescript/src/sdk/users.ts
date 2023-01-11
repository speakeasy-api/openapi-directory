import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Users {
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
   * getEntitiesUserAccessible - Multi-entity: List all entities that a user can access
   *
   * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
   * 
   * Retrieves detailed information about all the entities that a user has permission to access.
   * 
   * ## User Access Permission
   * You can make the call as any entity user.
   * 
  **/
  getEntitiesUserAccessible(
    req: operations.GetEntitiesUserAccessibleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEntitiesUserAccessibleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEntitiesUserAccessibleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/users/{username}/accessible-entities", req.pathParams);
    
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
        const res: operations.GetEntitiesUserAccessibleResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getEntitiesUserAccessibleResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putAcceptUserAccess - Multi-entity: Accept user access
   *
   * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
   * 
   * Accepts user access to an entity.
   * 
   * ## User Access Permission
   * You must make the calls as an administrator of the entity that you want to accept the user access to. 
   * 
  **/
  putAcceptUserAccess(
    req: operations.PutAcceptUserAccessRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAcceptUserAccessResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAcceptUserAccessRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/users/{username}/accept-access", req.pathParams);
    
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
        const res: operations.PutAcceptUserAccessResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.putAcceptUserAccessResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putDenyUserAccess - Multi-entity: Deny user access
   *
   * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
   * 
   * Denies a user access to an entity. 
   * 
   * ## User Access Permission
   * You must make the calls as an administrator of the entity that you want to deny the user access to.
   * 
  **/
  putDenyUserAccess(
    req: operations.PutDenyUserAccessRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutDenyUserAccessResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutDenyUserAccessRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/users/{username}/deny-access", req.pathParams);
    
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
        const res: operations.PutDenyUserAccessResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.putDenyUserAccessResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putSendUserAccessRequests - Multi-entity: Send user access requests
   *
   * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
   * 
   * Sends access requests to the entities that a user wants to access.
   * 
   * ## User Access Permission
   * You must make the call as an administrator of the entity, in which the request user is created. Also, this administrator must have the permission to access the entities that the request user wants to access.
   * 
  **/
  putSendUserAccessRequests(
    req: operations.PutSendUserAccessRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSendUserAccessRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSendUserAccessRequestsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/users/{username}/request-access", req.pathParams);

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
        const res: operations.PutSendUserAccessRequestsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.putSendUserAccessRequestResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
