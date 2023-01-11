import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";




export const ServerList = [
	"https://api.vonage.com/t/vbc.prod/provisioning",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
  }
  
  /**
   * accountCtrlGetAccountServicesByAccountId - Get account data by ID
  **/
  accountCtrlGetAccountServicesByAccountId(
    req: operations.AccountCtrlGetAccountServicesByAccountIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccountCtrlGetAccountServicesByAccountIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccountCtrlGetAccountServicesByAccountIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/accounts/{account_id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AccountCtrlGetAccountServicesByAccountIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.accountHalResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * accountCtrlGetLocationById - Get location data by account ID and location ID
  **/
  accountCtrlGetLocationById(
    req: operations.AccountCtrlGetLocationByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccountCtrlGetLocationByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccountCtrlGetLocationByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/accounts/{account_id}/locations/{location_id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AccountCtrlGetLocationByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.locationHalResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * accountCtrlGetLocationsByAccountId - Get account locations data by account ID
  **/
  accountCtrlGetLocationsByAccountId(
    req: operations.AccountCtrlGetLocationsByAccountIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccountCtrlGetLocationsByAccountIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccountCtrlGetLocationsByAccountIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/accounts/{account_id}/locations", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AccountCtrlGetLocationsByAccountIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.locationsHalResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}