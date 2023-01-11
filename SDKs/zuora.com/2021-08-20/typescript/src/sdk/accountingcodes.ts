import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class AccountingCodes {
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
   * deleteAccountingCode - Delete an accounting code
   *
   * This reference describes how to delete an accounting code through the REST API.
   * ## Prerequisites
   * If you have Zuora Finance enabled on your tenant, then you must have the Delete Unused Accounting Code permission.
   * ## Limitations
   * You can only delete accounting codes that have never been associated with any transactions. An accounting code must be deactivated before you can delete it.
   * 
  **/
  deleteAccountingCode(
    req: operations.DeleteAccountingCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAccountingCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAccountingCodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/accounting-codes/{ac-id}", req.pathParams);
    
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
        const res: operations.DeleteAccountingCodeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.commonResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAccountingCode - Retrieve an accounting code
   *
   * This reference describes how to query an accounting code through the REST API.
  **/
  getAccountingCode(
    req: operations.GetAccountingCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountingCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountingCodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/accounting-codes/{ac-id}", req.pathParams);
    
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
        const res: operations.GetAccountingCodeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getAccountingCodeItemType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAllAccountingCodes - List all accounting codes
   *
   * This reference describes how to query all accounting codes in your chart of accounts through the REST API.
  **/
  getAllAccountingCodes(
    req: operations.GetAllAccountingCodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllAccountingCodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllAccountingCodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/accounting-codes";
    
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
        const res: operations.GetAllAccountingCodesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getAccountingCodesType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postAccountingCode - Create an accounting code
   *
   * This reference describes how to create a new accounting code through the REST API. 
   * The accounting code will be active as soon as it has been created.
   * 
   * ## Prerequisites
   *   If you have Zuora Finance enabled on your tenant, you must have the  Configure Accounting Codes permission. 
   * 
  **/
  postAccountingCode(
    req: operations.PostAccountingCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAccountingCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAccountingCodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/accounting-codes";

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
        const res: operations.PostAccountingCodeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postAccountingCodeResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putAccountingCode - Update an accounting code
   *
   * This reference describes how to update an existing accounting code through the REST API.
   * ## Prerequisites
   *   If you have Zuora Finance enabled on your tenant, you must have the  Manage Accounting Code permission. 
   * ## Limitations
   * You can only update accounting codes that are not already associated with any transactions.
   * 
  **/
  putAccountingCode(
    req: operations.PutAccountingCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAccountingCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAccountingCodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/accounting-codes/{ac-id}", req.pathParams);

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
        const res: operations.PutAccountingCodeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.commonResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putActivateAccountingCode - Activate an accounting code
   *
   * This reference describes how to activate an accounting code through the REST API.
   * 
   * Prerequisites
   * -------------
   * If you have Zuora Finance enabled on your tenant, you must have the Manage Accounting Code permission. 
   * 
  **/
  putActivateAccountingCode(
    req: operations.PutActivateAccountingCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutActivateAccountingCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutActivateAccountingCodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/accounting-codes/{ac-id}/activate", req.pathParams);
    
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
        const res: operations.PutActivateAccountingCodeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.commonResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putDeactivateAccountingCode - Deactivate an accounting code
   *
   * This reference describes how to deactivate an accounting code through the REST API.
   * 
   * ## Prerequisites
   * If you have Zuora Finance enabled on your tenant, you must have the Manage Accounting Code permission.
   * ## Limitations
   * You can only deactivate accounting codes that are not associated with any transactions. 
   * You cannot disable accounting codes of type AccountsReceivable.
   * 
  **/
  putDeactivateAccountingCode(
    req: operations.PutDeactivateAccountingCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutDeactivateAccountingCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutDeactivateAccountingCodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/accounting-codes/{ac-id}/deactivate", req.pathParams);
    
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
        const res: operations.PutDeactivateAccountingCodeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.commonResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
