import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class BillingDocuments {
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
   * getBillingDocumentFilesDeletionJob - Retrieve a job of hard deleting billing document files
   *
   * Retrieves information about an asynchronous job of permanently deleting all billing document PDF files for specific accounts.
   * 
   * **Note**: This operation can be used only if you have the Billing user permission "Hard Delete Billing Document Files" enabled. 
   * 
  **/
  getBillingDocumentFilesDeletionJob(
    req: operations.GetBillingDocumentFilesDeletionJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBillingDocumentFilesDeletionJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBillingDocumentFilesDeletionJobRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/accounts/billing-documents/files/deletion-jobs/{jobId}", req.pathParams);
    
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
        const res: operations.GetBillingDocumentFilesDeletionJobResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getBillingDocumentFilesDeletionJobResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getBillingDocuments - List billing documents for an account
   *
   * Retrieves the information about all billing documents associated with a specified account. The billing documents contain invoices, credit memos, and debit memos. 
   * 
   * To retrieve information about credit memos and debit memos, you must have the Invoice Settlement feature enabled. 
   * 
   * You can use query parameters to restrict the data returned in the response.
   * 
   * Examples:
   * - /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1&sort=+documentDate
   * - /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1&status=Posted
   * 
  **/
  getBillingDocuments(
    req: operations.GetBillingDocumentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBillingDocumentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBillingDocumentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/billing-documents";
    
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
        const res: operations.GetBillingDocumentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.billingDocumentQueryResponseElementType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postBillingDocumentFilesDeletionJob - Create a job to hard delete billing document files
   *
   * Creates an asynchronous job to permanently delete all billing document PDF files for specific accounts. 
   * 
   * After the deletion job is completed, all billing document PDF files are permanently deleted. To retrieve the status of a deletion job, call [Retrieve a job of hard deleting billing document files](https://www.zuora.com/developer/api-reference/#operation/GET_BillingDocumentFilesDeletionJob).
   * 
   * **Note**: This operation can be used only if you have the Billing user permission "Hard Delete Billing Document Files" enabled. 
   * 
  **/
  postBillingDocumentFilesDeletionJob(
    req: operations.PostBillingDocumentFilesDeletionJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostBillingDocumentFilesDeletionJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostBillingDocumentFilesDeletionJobRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/accounts/billing-documents/files/deletion-jobs";

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
        const res: operations.PostBillingDocumentFilesDeletionJobResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postBillingDocumentFilesDeletionJobResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postGenerateBillingDocuments - Generate billing documents by account ID
   *
   * Generates draft or posted billing documents for a specified account. You can also generate billing documents for specified subscriptions of a specified account. The billing documents contain invoices and credit memos. To generate credit memos, you must have the Invoice Settlement feature enabled.
   * 
   * **Note**: You cannot generate billing documents for cancelled or suspended subscriptions.
   * 
  **/
  postGenerateBillingDocuments(
    req: operations.PostGenerateBillingDocumentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostGenerateBillingDocumentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostGenerateBillingDocumentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/accounts/{id}/billing-documents/generate", req.pathParams);

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
        const res: operations.PostGenerateBillingDocumentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.generateBillingDocumentResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
