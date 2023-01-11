import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class EventTriggers {
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
   * deleteEventTrigger - Delete an event trigger
  **/
  deleteEventTrigger(
    req: operations.DeleteEventTriggerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEventTriggerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEventTriggerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/events/event-triggers/{id}", req.pathParams);
    
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
        const res: operations.DeleteEventTriggerResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getEventTrigger - Retrieve an event trigger
  **/
  getEventTrigger(
    req: operations.GetEventTriggerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventTriggerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventTriggerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/events/event-triggers/{id}", req.pathParams);
    
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
        const res: operations.GetEventTriggerResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.eventTrigger = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getEventTriggers - List event triggers
  **/
  getEventTriggers(
    req: operations.GetEventTriggersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventTriggersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventTriggersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/events/event-triggers";
    
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
        const res: operations.GetEventTriggersResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getEventTriggers200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postEventTrigger - Create an event trigger
   *
   * When you create an event trigger, you must specify the base object and define the trigger condition.
   * 
   * ### Specify the base object
   * Use `baseObject` field to specify which object to define a trigger on. You can define an event trigger on any of the following objects:
   * 
   *   * Account
   *   * AccountingCode
   *   * AccountingPeriod
   *   * Amendment
   *   * BillingRun
   *   * Contact
   *   * CreditBalanceAdjustment
   *   * CreditMemo
   *   * CreditMemoApplication
   *   * CreditMemoApplicationItem
   *   * CreditMemoItem
   *   * DebitMemo
   *   * DebitMemoItem
   *   * Feature
   *   * Invoice
   *   * InvoiceAdjustment
   *   * InvoiceItem
   *   * InvoiceItemAdjustment
   *   * JournalEntry
   *   * JournalEntryItem
   *   * Order
   *   * OrderAction
   *   * Payment
   *   * PaymentApplication
   *   * PaymentMethod
   *   * PaymentPart
   *   * Product
   *   * ProductFeature
   *   * ProductRatePlan
   *   * ProductRatePlanCharge
   *   * RatePlan
   *   * RatePlanCharge
   *   * Refund
   *   * RefundApplication
   *   * RevenueEvent
   *   * RevenueEventItem
   *   * RevenueSchedule
   *   * RevenueScheduleItem
   *   * Subscription
   *   * SubscriptionProductFeature
   *   * TaxationItem
   *   * Usage
   * 
   * #### Tenant level base objects and tenant level event triggers
   * Zuora identifies the following base objects as the tenant level base objects:
   * 
   *   * AccountingCode
   *   * AccountingPeriod
   *   * BillingRun
   *   * Feature
   *   * JournalEntry
   *   * JournalEntryItem
   *   * Product
   *   * ProductFeature
   *   * ProductRatePlan
   *   * ProductRatePlanCharge
   * 
   * Event triggers defined on tenant level base objects are tenant level event triggers. Notifications associated with tenant level events are system notifications. 
   * 
   * **Note:** Tenant level event triggers and system notifications are only available in the default profile.        
   * 
   * ### Define the trigger condition
   * The `condition` field is a [JEXL](http://commons.apache.org/proper/commons-jexl/) expression that specifies when to trigger events. The expression can contain fields from the object that the trigger is defined on.
   * 
   * **Note:** The condition cannot contain fields from [data source](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL) objects that are joined to the object that the trigger is defined on.
   * 
   * For example, the following condition causes an event to be triggered whenever an invoice is posted with an amount greater than 1000:
   * 
   * ```changeType == 'UPDATE' && Invoice.Status == 'Posted' && Invoice.Status_old != 'Posted' && Invoice.Amount > 1000```
   * 
   * Where:
   * 
   *   * `changeType` is a keyword that specifies the type of change that occurred to the Invoice object. For all objects, the supported values of `changeType` are `INSERT`, `UPDATE`,  and `DELETE`.
   *   * `Invoice.Status` is the value of the Invoice object's `Status` field after the change occurred.
   *   * `Invoice.Status_old` is the value of the Invoice object's `Status` field before the change occurred.
   * 
   * In the above example, the value of `baseObject` is `Invoice`.
   * 
   * ### Limitations 
   * 
   * This event trigger has the following limitations:
   * 
   * * The maximum number of event triggers is 20. If you want to increase the limit, submit a request at [Zuora Global Support](https://support.zuora.com).
   * 
   * * The INSERT change type is not supported on RatePlan base objects.
   * 
   * * The INSERT change type is not supported on SubscriptionProductFeature base objects.
   * 
  **/
  postEventTrigger(
    req: operations.PostEventTriggerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostEventTriggerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostEventTriggerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/events/event-triggers";

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
        const res: operations.PostEventTriggerResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.eventTrigger = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putEventTrigger - Update an event trigger
  **/
  putEventTrigger(
    req: operations.PutEventTriggerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutEventTriggerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutEventTriggerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/events/event-triggers/{id}", req.pathParams);

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
        const res: operations.PutEventTriggerResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.eventTrigger = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
