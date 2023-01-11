import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Ramps {
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
   * getRampByRampNumber - Retrieve a ramp
   *
   * **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
   * 
   * Retrieves the latest definition of a specified ramp.
   * 
  **/
  getRampByRampNumber(
    req: operations.GetRampByRampNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRampByRampNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRampByRampNumberRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/ramps/{rampNumber}", req.pathParams);
    
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
        const res: operations.GetRampByRampNumberResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getRampByRampNumberResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRampMetricsByOrderNumber - List ramp metrics by order number
   *
   * **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
   * 
   * Retrieves key ramp metrics about a specified order, including the following metrics:
   * 
   * * TCB, TCV in the Ramp level
   * * TCB, TCV in the Interval level
   * * TCB, TCV, Quantity, and MRR in Interval Metrics
   * * Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics
   * 
   * See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.
   * 
  **/
  getRampMetricsByOrderNumber(
    req: operations.GetRampMetricsByOrderNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRampMetricsByOrderNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRampMetricsByOrderNumberRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/orders/{orderNumber}/ramp-metrics", req.pathParams);
    
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
        const res: operations.GetRampMetricsByOrderNumberResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getRampMetricsByOrderNumberResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRampMetricsByRampNumber - List all ramp metrics of a ramp
   *
   * **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
   * 
   * Retrieves key metrics about a specified ramp, including the following metrics:
   * 
   * * TCB, TCV in the Ramp level
   * * TCB, TCV in the Interval level
   * * TCB, TCV, Quantity, and MRR in Interval Metrics
   * * Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics
   * 
   * See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.
   * 
  **/
  getRampMetricsByRampNumber(
    req: operations.GetRampMetricsByRampNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRampMetricsByRampNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRampMetricsByRampNumberRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/ramps/{rampNumber}/ramp-metrics", req.pathParams);
    
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
        const res: operations.GetRampMetricsByRampNumberResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getRampMetricsByRampNumberResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRampMetricsBySubscriptionKey - List ramp metrics by subscription key
   *
   * **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
   * 
   * Retrieves key ramp metrics about a specified subscription, including the following metrics:
   * 
   * * TCB, TCV in the Ramp level
   * * TCB, TCV in the Interval level
   * * TCB, TCV, Quantity, and MRR in Interval Metrics
   * * Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics
   * 
   * See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.
   * 
  **/
  getRampMetricsBySubscriptionKey(
    req: operations.GetRampMetricsBySubscriptionKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRampMetricsBySubscriptionKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRampMetricsBySubscriptionKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/subscriptions/{subscriptionKey}/ramp-metrics", req.pathParams);
    
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
        const res: operations.GetRampMetricsBySubscriptionKeyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getRampMetricsBySubscriptionKeyResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRampsBySubscriptionKey - Retrieve a ramp by subscription key
   *
   * **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
   * 
   *  Retrieves the definition of the ramp associated with a specified subscription.
   * 
  **/
  getRampsBySubscriptionKey(
    req: operations.GetRampsBySubscriptionKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRampsBySubscriptionKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRampsBySubscriptionKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/subscriptions/{subscriptionKey}/ramps", req.pathParams);
    
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
        const res: operations.GetRampsBySubscriptionKeyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getRampsBySubscriptionKeyResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
