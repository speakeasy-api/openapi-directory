import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class RevenueItems {
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
   * getRevenueItemsByChargeRevenueEventNumber - List revenue items by revenue event number
   *
   * This REST API reference describes how to get the details of each revenue item in a revenue event by specifying the revenue event number. Request and response field descriptions and sample code are provided.
   * 
  **/
  getRevenueItemsByChargeRevenueEventNumber(
    req: operations.GetRevenueItemsByChargeRevenueEventNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRevenueItemsByChargeRevenueEventNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRevenueItemsByChargeRevenueEventNumberRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-items/revenue-events/{event-number}", req.pathParams);
    
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
        const res: operations.GetRevenueItemsByChargeRevenueEventNumberResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getRevenueItemsType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRevenueItemsByChargeRevenueSummaryNumber - List revenue items by charge revenue summary number
   *
   * This REST API reference describes how to get the details for each revenue item in a charge revenue summary by specifying the charge revenue summary number. Request and response field descriptions and sample code are provided.
   * 
  **/
  getRevenueItemsByChargeRevenueSummaryNumber(
    req: operations.GetRevenueItemsByChargeRevenueSummaryNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRevenueItemsByChargeRevenueSummaryNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRevenueItemsByChargeRevenueSummaryNumberRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-items/charge-revenue-summaries/{crs-number}", req.pathParams);
    
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
        const res: operations.GetRevenueItemsByChargeRevenueSummaryNumberResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getRevenueItemsType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRevenueItemsByRevenueSchedule - List all revenue items of a revenue schedule
   *
   * This REST API reference describes how to get the details for each revenue items in a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
   * 
  **/
  getRevenueItemsByRevenueSchedule(
    req: operations.GetRevenueItemsByRevenueScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRevenueItemsByRevenueScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRevenueItemsByRevenueScheduleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-items/revenue-schedules/{rs-number}", req.pathParams);
    
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
        const res: operations.GetRevenueItemsByRevenueScheduleResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getRsRevenueItemsType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putCustomFieldsonRevenueItemsByRevenueEvent - Update custom fields on revenue items by revenue event number
   *
   * This REST API reference describes how to update custom fields on revenue items by specifying the revenue event number. Request and response field descriptions and sample code are provided.
   * 
  **/
  putCustomFieldsonRevenueItemsByRevenueEvent(
    req: operations.PutCustomFieldsonRevenueItemsByRevenueEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutCustomFieldsonRevenueItemsByRevenueEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutCustomFieldsonRevenueItemsByRevenueEventRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-items/revenue-events/{event-number}", req.pathParams);

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
        const res: operations.PutCustomFieldsonRevenueItemsByRevenueEventResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
   * putCustomFieldsonRevenueItemsByRevenueSchedule - Update custom fields on revenue items by revenue schedule number
   *
   * This REST API reference describes how to update custom fields on revenue Items by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
   * 
  **/
  putCustomFieldsonRevenueItemsByRevenueSchedule(
    req: operations.PutCustomFieldsonRevenueItemsByRevenueScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutCustomFieldsonRevenueItemsByRevenueScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutCustomFieldsonRevenueItemsByRevenueScheduleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-items/revenue-schedules/{rs-number}", req.pathParams);

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
        const res: operations.PutCustomFieldsonRevenueItemsByRevenueScheduleResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
