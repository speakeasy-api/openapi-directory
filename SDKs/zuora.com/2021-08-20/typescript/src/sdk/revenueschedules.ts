import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class RevenueSchedules {
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
   * deleteRs - Delete a revenue schedule
   *
   * Deletes a revenue schedule by specifying its revenue schedule number
   * ## Prerequisites
   * You must have the Delete Custom Revenue Schedule permissions in Zuora Finance.
   * 
   * The revenue schedule must not be associated with any invoice item, invoice item adjustment, or credit/debit memo item in Zuora Billing.
   * 
  **/
  deleteRs(
    req: operations.DeleteRsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/{rs-number}", req.pathParams);
    
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
        const res: operations.DeleteRsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
   * getRs - List all details of a revenue schedule
   *
   * Retrieves the details of a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
   * 
  **/
  getRs(
    req: operations.GetRsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/{rs-number}", req.pathParams);
    
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
        const res: operations.GetRsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getrsDetailType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRSbyCreditMemoItem - Retrieve a revenue schedule by credit memo item ID
   * 
   *
   * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
   * 
   * Retrieves the details about a revenue schedule by specifying a valid credit memo item ID.
   * 
  **/
  getRSbyCreditMemoItem(
    req: operations.GetRSbyCreditMemoItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRSbyCreditMemoItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRSbyCreditMemoItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/credit-memo-items/{cmi-id}", req.pathParams);
    
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
        const res: operations.GetRSbyCreditMemoItemResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getrsDetailType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRSbyDebitMemoItem - Retrieve a revenue schedule by debit memo item ID
   * 
   *
   * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
   * 
   * Retrieves the details about a revenue schedule by specifying a valid debit memo item ID.
   * 
  **/
  getRSbyDebitMemoItem(
    req: operations.GetRSbyDebitMemoItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRSbyDebitMemoItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRSbyDebitMemoItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/debit-memo-items/{dmi-id}", req.pathParams);
    
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
        const res: operations.GetRSbyDebitMemoItemResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getrsDetailType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRSbyInvoiceItem - Retrieve a revenue schedule by invoice item ID
   *
   * Retrieves the details of a revenue schedule by specifying the invoice item ID.
   * 
  **/
  getRSbyInvoiceItem(
    req: operations.GetRSbyInvoiceItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRSbyInvoiceItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRSbyInvoiceItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/invoice-items/{invoice-item-id}", req.pathParams);
    
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
        const res: operations.GetRSbyInvoiceItemResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getrsDetailType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRSbyInvoiceItemAdjustment - Retrieve a revenue schedule by invoice item adjustment key
   *
   * Retrieves the details of a revenue schedule by specifying a valid invoice item adjustment identifier. Request and response field descriptions and sample code are provided.
   * 
  **/
  getRSbyInvoiceItemAdjustment(
    req: operations.GetRSbyInvoiceItemAdjustmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRSbyInvoiceItemAdjustmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRSbyInvoiceItemAdjustmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/invoice-item-adjustments/{invoice-item-adj-key}", req.pathParams);
    
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
        const res: operations.GetRSbyInvoiceItemAdjustmentResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getrsDetailType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRSbyProductChargeAndBillingAccount - List revenue schedules of a product charge by charge ID and account key
   * 
   *
   * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
   * 
   * Retrieves the details about all revenue schedules of a product rate plan charge by specifying the charge ID and billing account ID.
   * 
  **/
  getRSbyProductChargeAndBillingAccount(
    req: operations.GetRSbyProductChargeAndBillingAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRSbyProductChargeAndBillingAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRSbyProductChargeAndBillingAccountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/product-charges/{charge-key}/{account-key}", req.pathParams);
    
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
        const res: operations.GetRSbyProductChargeAndBillingAccountResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getrsDetailsByProductChargeType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRSforSubscCharge - List revenue schedules by subscription charge key
   *
   * Retrieves the revenue schedule details by specifying subscription charge ID. Request and response field descriptions and sample code are provided
   * 
  **/
  getRSforSubscCharge(
    req: operations.GetRSforSubscChargeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRSforSubscChargeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRSforSubscChargeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/subscription-charges/{charge-key}", req.pathParams);
    
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
        const res: operations.GetRSforSubscChargeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getrsDetailsByChargeType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postRSforCreditMemoItemDistributeByDateRange - Create a revenue schedule for a credit memo item (distribute by date range)
   * 
   *
   * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
   * 
   * Creates a revenue schedule for a credit memo item, and automatically distribute the revenue by specifying the recognition start and end dates.
   * 
  **/
  postRSforCreditMemoItemDistributeByDateRange(
    req: operations.PostRSforCreditMemoItemDistributeByDateRangeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRSforCreditMemoItemDistributeByDateRangeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRSforCreditMemoItemDistributeByDateRangeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/credit-memo-items/{cmi-id}/distribute-revenue-with-date-range", req.pathParams);

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
        const res: operations.PostRSforCreditMemoItemDistributeByDateRangeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postRevenueScheduleByTransactionResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postRSforCreditMemoItemManualDistribution - Create a revenue schedule for a credit memo item (manual distribution)
   * 
   *
   * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
   * 
   * Creates a revenue schedule for a credit memo item, and manually distribute the revenue.
   * 
  **/
  postRSforCreditMemoItemManualDistribution(
    req: operations.PostRSforCreditMemoItemManualDistributionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRSforCreditMemoItemManualDistributionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRSforCreditMemoItemManualDistributionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/credit-memo-items/{cmi-id}", req.pathParams);

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
        const res: operations.PostRSforCreditMemoItemManualDistributionResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postRevenueScheduleByTransactionResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postRSforDebitMemoItemDistributeByDateRange - Create a revenue schedule for a debit memo item (distribute by date range)
   * 
   *
   * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
   * 
   * Creates a revenue schedule for a debit memo item, and automatically distribute the revenue by specifying the recognition start and end dates.
   * 
  **/
  postRSforDebitMemoItemDistributeByDateRange(
    req: operations.PostRSforDebitMemoItemDistributeByDateRangeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRSforDebitMemoItemDistributeByDateRangeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRSforDebitMemoItemDistributeByDateRangeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/debit-memo-items/{dmi-id}/distribute-revenue-with-date-range", req.pathParams);

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
        const res: operations.PostRSforDebitMemoItemDistributeByDateRangeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postRevenueScheduleByTransactionResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postRSforDebitMemoItemManualDistribution - Create a revenue schedule for a debit memo item (distribute by date range)
   * 
   *
   * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
   * 
   * Creates a revenue schedule for a debit memo item, and manually distribute the revenue.
   * 
  **/
  postRSforDebitMemoItemManualDistribution(
    req: operations.PostRSforDebitMemoItemManualDistributionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRSforDebitMemoItemManualDistributionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRSforDebitMemoItemManualDistributionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/debit-memo-items/{dmi-id}", req.pathParams);

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
        const res: operations.PostRSforDebitMemoItemManualDistributionResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postRevenueScheduleByTransactionResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postRSforInvoiceItemAdjustmentDistributeByDateRange - Create a revenue schedule for an invoice item adjustment (distribute by date range)
   *
   * Creates a revenue schedule for an Invoice Item Adjustment and distribute the revenue by specifying the recognition start and end dates.
   * 
  **/
  postRSforInvoiceItemAdjustmentDistributeByDateRange(
    req: operations.PostRSforInvoiceItemAdjustmentDistributeByDateRangeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRSforInvoiceItemAdjustmentDistributeByDateRangeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRSforInvoiceItemAdjustmentDistributeByDateRangeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/invoice-item-adjustments/{invoice-item-adj-key}/distribute-revenue-with-date-range", req.pathParams);

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
        const res: operations.PostRSforInvoiceItemAdjustmentDistributeByDateRangeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postRevenueScheduleByTransactionResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postRSforInvoiceItemAdjustmentManualDistribution - Create a revenue schedule for an invoice item adjustment (manual distribution)
   *
   * Creates a revenue schedule for an Invoice Item Adjustment and manually distribute the revenue.
   * 
  **/
  postRSforInvoiceItemAdjustmentManualDistribution(
    req: operations.PostRSforInvoiceItemAdjustmentManualDistributionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRSforInvoiceItemAdjustmentManualDistributionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRSforInvoiceItemAdjustmentManualDistributionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/invoice-item-adjustments/{invoice-item-adj-key}", req.pathParams);

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
        const res: operations.PostRSforInvoiceItemAdjustmentManualDistributionResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postRevenueScheduleByTransactionResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postRSforInvoiceItemDistributeByDateRange - Create a revenue schedule for an invoice item (distribute by date range)
   *
   * Creates a revenue schedule for an Invoice Item and distribute the revenue by specifying the recognition start and end dates.
   * 
  **/
  postRSforInvoiceItemDistributeByDateRange(
    req: operations.PostRSforInvoiceItemDistributeByDateRangeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRSforInvoiceItemDistributeByDateRangeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRSforInvoiceItemDistributeByDateRangeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/invoice-items/{invoice-item-id}/distribute-revenue-with-date-range", req.pathParams);

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
        const res: operations.PostRSforInvoiceItemDistributeByDateRangeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postRevenueScheduleByTransactionResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postRSforInvoiceItemManualDistribution - Create a revenue schedule for an invoice item (manual distribution)
   *
   * Creates a revenue schedule for an Invoice Item and manually distribute the revenue.
   * 
  **/
  postRSforInvoiceItemManualDistribution(
    req: operations.PostRSforInvoiceItemManualDistributionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRSforInvoiceItemManualDistributionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRSforInvoiceItemManualDistributionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/invoice-items/{invoice-item-id}", req.pathParams);

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
        const res: operations.PostRSforInvoiceItemManualDistributionResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postRevenueScheduleByTransactionResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postRSforSubscCharge - Create a revenue schedule by subscription charge key
   *
   * Creates a revenue schedule by specifying the subscription charge. This method is for custom unlimited revenue recognition only.
   * 
   * **Note**: You can create a maximum of 3,000 revenue schedules for a subscription charge.
   * 
  **/
  postRSforSubscCharge(
    req: operations.PostRSforSubscChargeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRSforSubscChargeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRSforSubscChargeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/subscription-charges/{charge-key}", req.pathParams);

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
        const res: operations.PostRSforSubscChargeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postRevenueScheduleByChargeResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putRsBasicInfo - Update a revenue schedule
   *
   * Retrieves basic information of a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
   * 
  **/
  putRsBasicInfo(
    req: operations.PutRsBasicInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRsBasicInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRsBasicInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/{rs-number}/basic-information", req.pathParams);

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
        const res: operations.PutRsBasicInfoResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
   * putRevenueAcrossAp - Distribute revenue across accounting periods
   *
   * Distributes revenue by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
   * 
  **/
  putRevenueAcrossAp(
    req: operations.PutRevenueAcrossApRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRevenueAcrossApResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRevenueAcrossApRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/{rs-number}/distribute-revenue-across-accounting-periods", req.pathParams);

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
        const res: operations.PutRevenueAcrossApResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.putRevenueScheduleResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putRevenueByRecognitionStartandEndDates - Distribute revenue in a recognition period
   *
   * Distributes revenue by specifying the recognition start and end dates. Request and response field descriptions and sample code are provided.
   * 
  **/
  putRevenueByRecognitionStartandEndDates(
    req: operations.PutRevenueByRecognitionStartandEndDatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRevenueByRecognitionStartandEndDatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRevenueByRecognitionStartandEndDatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/{rs-number}/distribute-revenue-with-date-range", req.pathParams);

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
        const res: operations.PutRevenueByRecognitionStartandEndDatesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.putRevenueScheduleResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putRevenueSpecificDate - Distribute revenue on a specific date
   *
   * Distributes revenue on a specific recognition date. Request and response field descriptions and sample code are provided.
   * 
  **/
  putRevenueSpecificDate(
    req: operations.PutRevenueSpecificDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRevenueSpecificDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRevenueSpecificDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/revenue-schedules/{rs-number}/distribute-revenue-on-specific-date", req.pathParams);

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
        const res: operations.PutRevenueSpecificDateResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.putRevenueScheduleResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
