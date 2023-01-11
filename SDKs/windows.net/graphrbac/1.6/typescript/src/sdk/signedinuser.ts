import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class SignedInUser {
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
   * signedInUserGet - Gets the details for the currently logged-in user.
  **/
  signedInUserGet(
    req: operations.SignedInUserGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SignedInUserGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SignedInUserGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{tenantID}/me", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SignedInUserGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.user = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.user = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * signedInUserListOwnedObjects - Get the list of directory objects that are owned by the user.
  **/
  signedInUserListOwnedObjects(
    req: operations.SignedInUserListOwnedObjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SignedInUserListOwnedObjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SignedInUserListOwnedObjectsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{tenantID}/me/ownedObjects", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SignedInUserListOwnedObjectsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.directoryObjectListResult = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.directoryObjectListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
