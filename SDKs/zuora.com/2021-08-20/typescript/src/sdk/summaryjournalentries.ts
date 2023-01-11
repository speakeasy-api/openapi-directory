import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class SummaryJournalEntries {
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
   * deleteSummaryJournalEntry - Delete a summary journal entry
   *
   * This reference describes how to delete a summary journal entry using the REST API.
   * 
   * You must have the "Delete Cancelled Journal Entry" user permission enabled to delete summary journal entries.
   * 
   * A summary journal entry must be canceled before it can be deleted.
   * 
  **/
  deleteSummaryJournalEntry(
    req: operations.DeleteSummaryJournalEntryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSummaryJournalEntryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSummaryJournalEntryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/journal-entries/{je-number}", req.pathParams);
    
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
        const res: operations.DeleteSummaryJournalEntryResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
   * getAllSummaryJournalEntries - List all summary journal entries in a journal run
   *
   * 
   * This REST API reference describes how to retrieve information about all summary journal entries in a journal run.
   * 
  **/
  getAllSummaryJournalEntries(
    req: operations.GetAllSummaryJournalEntriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllSummaryJournalEntriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllSummaryJournalEntriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/journal-entries/journal-runs/{jr-number}", req.pathParams);
    
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
        const res: operations.GetAllSummaryJournalEntriesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getJournalEntriesInJournalRunType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSummaryJournalEntry - Retrieve a summary journal entry
   *
   * This REST API reference describes how to get information about a summary journal entry by its journal entry number.
   * 
  **/
  getSummaryJournalEntry(
    req: operations.GetSummaryJournalEntryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSummaryJournalEntryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSummaryJournalEntryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/journal-entries/{je-number}", req.pathParams);
    
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
        const res: operations.GetSummaryJournalEntryResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getJournalEntryDetailType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postSummaryJournalEntry - Create a summary journal entry
   *
   * This REST API reference describes how to manually create a summary journal entry. Request and response field descriptions and sample code are provided.
   * ## Requirements
   * 1.The sum of debits must equal the sum of credits in the summary journal entry.
   * 
   * 2.The following applies only if you use foreign currency conversion:
   *   * If you have configured Aggregate transactions with different currencies during a Journal Run to "Yes", the value of the **currency** field must be the same as your tenant's home currency. That is, you must create journal entries using your home currency.
   *   * All journal entries in an accounting period must either all be aggregated or all be unaggregated. You cannot have a mix of aggregated and unaggregated journal entries in the same accounting period.
   * 
  **/
  postSummaryJournalEntry(
    req: operations.PostSummaryJournalEntryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSummaryJournalEntryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSummaryJournalEntryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/journal-entries";

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
        const res: operations.PostSummaryJournalEntryResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postJournalEntryResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putBasicSummaryJournalEntry - Update a summary journal entry
   *
   * 
   * This REST API reference describes how to update the basic information of a summary journal entry. Request and response field descriptions and sample code are provided.
   * 
  **/
  putBasicSummaryJournalEntry(
    req: operations.PutBasicSummaryJournalEntryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutBasicSummaryJournalEntryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutBasicSummaryJournalEntryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/journal-entries/{je-number}/basic-information", req.pathParams);

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
        const res: operations.PutBasicSummaryJournalEntryResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
   * putSummaryJournalEntry - Cancel a summary journal entry
   *
   * 
   * This reference describes how to cancel a summary journal entry using the REST API.
   *     
   * You must have the "Cancel Journal Entry" user permission enabled to cancel summary journal entries.
   *     
   * A summary journal entry cannot be canceled if its Transferred to Accounting status is "Yes" or "Processing".
   * 
  **/
  putSummaryJournalEntry(
    req: operations.PutSummaryJournalEntryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSummaryJournalEntryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSummaryJournalEntryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/journal-entries/{je-number}/cancel", req.pathParams);
    
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
        const res: operations.PutSummaryJournalEntryResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
