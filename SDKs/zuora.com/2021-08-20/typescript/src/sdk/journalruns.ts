import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class JournalRuns {
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
   * deleteJournalRun - Delete a journal run
   *
   * This reference describes how to delete a journal run using the REST API.
   *                       
   *  You can only delete journal runs that have already been canceled.
   *                       
   *  You must have the "Delete Cancelled Journal Run" Zuora Finance user permission enabled to delete journal runs.
   * 
  **/
  deleteJournalRun(
    req: operations.DeleteJournalRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteJournalRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteJournalRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/journal-runs/{jr-number}", req.pathParams);
    
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
        const res: operations.DeleteJournalRunResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
   * getJournalRun - Retrieve a journal run
   *
   * This REST API reference describes how to get information about a journal run. Request and response field descriptions and sample code are provided.
   * 
  **/
  getJournalRun(
    req: operations.GetJournalRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetJournalRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetJournalRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/journal-runs/{jr-number}", req.pathParams);
    
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
        const res: operations.GetJournalRunResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getJournalRunType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postJournalRun - Create a journal run
   *
   * This REST API reference describes how to create a journal run. Request and response field descriptions and sample code are provided.
   * 
  **/
  postJournalRun(
    req: operations.PostJournalRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostJournalRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostJournalRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/journal-runs";

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
        const res: operations.PostJournalRunResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postJournalRunResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putJournalRun - Cancel a journal run
   *
   * This reference describes how to cancel a journal run using the REST API.
   *           
   * The summary journal entries in the journal run are canceled asynchronously. See the "Example" section below for details.
   *           
   * You must have the "Cancel Journal Run" Zuora Finance user permission enabled to cancel journal runs.
   * 
   * ## Notes
   * When you cancel a journal run, the summary journal entries associated with that journal run are canceled asynchronously. A response of `{ "success": true }` means only that the specified journal run has a status of "Pending", "Error", or "Completed" and therefore can be canceled, but does not mean that the whole journal run was successfully canceled.
   * 
   * For example, let's say you want to cancel journal run JR-00000075. The journal run status is "Completed" and it contains ten journal entries. One of the journal entries has its Transferred to Accounting status set to "Yes", meaning that the entry cannot be canceled. The workflow might go as follows:
   * 1. You make an API call to cancel the journal run.
   * 2. The journal run status is "Completed", so you receive a response of `{ "success": true }`.
   * 3. Zuora begins asynchronously canceling journal entries associated with the journal run. The journal entry whose Transferred to Accounting status is "Yes" fails to be canceled. The cancelation process continues, and the other journal entries are successfully canceled.
   * 4. The journal run status remains as "Completed". The status does not change to "Canceled" because the journal run still contains a journey entry that is not canceled.
   * 
  **/
  putJournalRun(
    req: operations.PutJournalRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutJournalRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutJournalRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/journal-runs/{jr-number}/cancel", req.pathParams);
    
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
        const res: operations.PutJournalRunResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
