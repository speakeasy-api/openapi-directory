import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class PaymentRuns {
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
   * deletePaymentRun - Delete a payment run
   *
   * Deletes a payment run. Only payment runs with the Canceled or Error status can be deleted.
   * 
  **/
  deletePaymentRun(
    req: operations.DeletePaymentRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePaymentRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePaymentRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-runs/{paymentRunId}", req.pathParams);
    
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
        const res: operations.DeletePaymentRunResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.commonResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPaymentRun - Retrieve a payment run
   *
   * Retrives the information about a specific payment run.
   * 
  **/
  getPaymentRun(
    req: operations.GetPaymentRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-runs/{paymentRunId}", req.pathParams);
    
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
        const res: operations.GetPaymentRunResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getPaymentRunType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPaymentRunData - Retrieve payment run data
   *
   * Retrieves payment run data and the processing result with details, if the `data` field was specified in the Create payment run operation.
   *    
   * 
  **/
  getPaymentRunData(
    req: operations.GetPaymentRunDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentRunDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentRunDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-runs/{paymentRunId}/data", req.pathParams);
    
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
        const res: operations.GetPaymentRunDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getPaymentRunDataArrayResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPaymentRunSummary - Retrieve a payment run summary
   *
   * Retrives the summary of a payment run.
   * 
  **/
  getPaymentRunSummary(
    req: operations.GetPaymentRunSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentRunSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentRunSummaryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-runs/{paymentRunId}/summary", req.pathParams);
    
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
        const res: operations.GetPaymentRunSummaryResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getPaymentRunSummaryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPaymentRuns - List payment runs
   *
   * Retrieves the information about all payment runs. You can define filterable fields to restrict the data returned in the response.
   * 
   * ### Filtering
   * 
   * You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.
   * 
   * If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`. 
   * 
   * Examples:
   * 
   * - /v1/payment-runs?status=Processed
   * 
   * - /v1/payment-runs?targetDate=2017-10-10&status=Pending
   * 
   * - /v1/payment-runs?status=Completed&sort=+updatedDate
   * 
  **/
  getPaymentRuns(
    req: operations.GetPaymentRunsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentRunsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentRunsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/payment-runs";
    
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
        const res: operations.GetPaymentRunsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getPaymentRunCollectionType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPaymentRun - Create a payment run
   *
   * Creates a payment run. You can create a payment run to be executed immediately after it is created, or a scheduled payment run to be executed in future.
   * 
   * To filter the payments to be collected for a payment run, you can use either of the following methods but not both:
   * 
   *   - Use the `accountId`, `batch`, `billCycleDay`, `currency`, `paymentGatewayId`, and `billingRunId` fields to define the billing documents to be collected.
   *   - Use the `data` field to specify the records of accounts and billing documents to be collected, in a more flexible manner.
   * 
   * If no filter criteria are specified in the request body, the payment run collects payments for all accounts.
   * 
  **/
  postPaymentRun(
    req: operations.PostPaymentRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPaymentRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPaymentRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/payment-runs";

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
        const res: operations.PostPaymentRunResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getPaymentRunType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putPaymentRun - Update a payment run
   *
   * Updates the information about an unexecuted payment run. Only pending payment runs can be updated.
   * 
   * If none of the **accountId**, **batch**, **billCycleDay**, **currency**, **paymentGatewayId**, and **billingRunId** fields is specified in the request body, the corresponding payment run collects payments for all accounts.
   * 
  **/
  putPaymentRun(
    req: operations.PutPaymentRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutPaymentRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutPaymentRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-runs/{paymentRunId}", req.pathParams);

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
        const res: operations.PutPaymentRunResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getPaymentRunType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
