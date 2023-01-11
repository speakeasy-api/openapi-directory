import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CustomObjectJobs {
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
   * getAllCustomObjectBulkJobs - List all custom object bulk jobs
   *
   * Lists all custom object bulk jobs submitted by your tenant.
   * 
  **/
  getAllCustomObjectBulkJobs(
    req: operations.GetAllCustomObjectBulkJobsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllCustomObjectBulkJobsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllCustomObjectBulkJobsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/objects/jobs";
    
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
        const res: operations.GetAllCustomObjectBulkJobsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.customObjectBulkJobResponseCollection = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCustomObjectBulkJob - Retrieve a custom object bulk job
   *
   * Retrieves the custom object bulk job details by job ID.
   * 
   * Only the users that have the "View Custom Objects" permission can retrieve custom object bulk jobs. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
   * 
  **/
  getCustomObjectBulkJob(
    req: operations.GetCustomObjectBulkJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomObjectBulkJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomObjectBulkJobRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/objects/jobs/{id}", req.pathParams);
    
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
        const res: operations.GetCustomObjectBulkJobResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.customObjectBulkJobResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.commonErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCustomObjectBulkJobErrors - List all errors for a custom object bulk job
   *
   * Lists all errors for a custom object bulk job.
   * 
  **/
  getCustomObjectBulkJobErrors(
    req: operations.GetCustomObjectBulkJobErrorsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomObjectBulkJobErrorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomObjectBulkJobErrorsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/objects/jobs/{id}/errors", req.pathParams);
    
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
        const res: operations.GetCustomObjectBulkJobErrorsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.customObjectBulkJobErrorResponseCollection = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.commonErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCustomObjectBulkJob - Submit a custom object bulk job
   *
   * Submits a bulk job request for a bulk operation on the specified custom object records. A succcessful call returns a newly created bulk job. The job ID can be used to poll the job status or upload the CSV file if it is a `create` job.
   * 
   * ## Limits
   * This custom object bulk jobs have the following limits:
   * * The concurrent bulk job limit per tenant is 5. Bulk jobs in `open`, `pending`, or `in_progress` status are counted towards the concurrent bulk job limit.
   * * The bulk job execuation order is not guaranteed, which means the bulk job that you submit ealier may be executed later.  
   * * Only the users that have the "Delete Custom Objects" permission can create a `delete` bulk job. Only the users that have the "Edit Custom Objects" permission can create a `create` bulk job. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
   * 
  **/
  postCustomObjectBulkJob(
    req: operations.PostCustomObjectBulkJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCustomObjectBulkJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCustomObjectBulkJobRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/objects/jobs";

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
        const res: operations.PostCustomObjectBulkJobResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.customObjectBulkJobResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.commonErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.commonErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postUploadFileForCustomObjectBulkJob - Upload a file for a custom object bulk job
   *
   * Uploads a file to a create custom object bulk job. Only one file is allowed per job. The job must be in `pending` status when you upload the file to it. The job will start creating records once the upload is finished.
   * 
   * Only the users that have the "Edit Custom Objects" permission can upload files to custom object bulk jobs. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
   * 
  **/
  postUploadFileForCustomObjectBulkJob(
    req: operations.PostUploadFileForCustomObjectBulkJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUploadFileForCustomObjectBulkJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUploadFileForCustomObjectBulkJobRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/objects/jobs/{id}/files", req.pathParams);

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
        const res: operations.PostUploadFileForCustomObjectBulkJobResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.customObjectBulkJobResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.commonErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.commonErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.commonErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
