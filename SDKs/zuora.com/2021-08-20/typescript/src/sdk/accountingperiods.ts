import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class AccountingPeriods {
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
   * deleteAccountingPeriod - Delete an accounting period
   *
   * Deletes an accounting period.
   * 
   * Prerequisites
   * -------------
   * 
   *  * You must have Zuora Finance enabled on your tenant.
   * 
   *  * You must have the Delete Accounting Period user permission. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).
   * 
   * 
   * Limitations
   * -----------
   * 
   * The accounting period to be deleted:
   * 
   * * Must be the most recent accounting period
   * 
   * * Must be an open accounting period
   * 
   * * Must have no revenue distributed into it
   * 
   * * Must not have any active journal entries
   * 
   * * Must not be the open-ended accounting period
   * 
   * * Must not be in the process of running a trial balance
   * 
  **/
  deleteAccountingPeriod(
    req: operations.DeleteAccountingPeriodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAccountingPeriodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAccountingPeriodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/accounting-periods/{ap-id}", req.pathParams);
    
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
        const res: operations.DeleteAccountingPeriodResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
   * getAccountingPeriod - Retrieve an accounting period
   *
   * Retrieves an accounting period.
   * Prerequisites
   * -------------
   * 
   * You must have Zuora Finance enabled on your tenant.
   * 
  **/
  getAccountingPeriod(
    req: operations.GetAccountingPeriodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountingPeriodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountingPeriodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/accounting-periods/{ap-id}", req.pathParams);
    
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
        const res: operations.GetAccountingPeriodResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getAccountingPeriodType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAllAccountingPeriods - List all accounting periods
   *
   * Retrieves all accounting periods on your tenant.
  **/
  getAllAccountingPeriods(
    req: operations.GetAllAccountingPeriodsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllAccountingPeriodsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllAccountingPeriodsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/accounting-periods";
    
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
        const res: operations.GetAllAccountingPeriodsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getAccountingPeriodsType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postAccountingPeriod - Create an accounting period
   *
   * Creates an accounting period.
   * Prerequisites
   * -------------
   * * You must have Zuora Finance enabled on your tenant.
   * * You must have the Create Accounting Period user permission.
   * 
   * Limitations
   * -----------
   * * When creating the first accounting period on your tenant, the start date must be equal to or earlier than the date of the earliest transaction on the tenant.
   * * Start and end dates of accounting periods must be contiguous. For example, if one accounting period ends on January 31, the next period must start on February 1.
   * * If you have the Revenue Recognition Package and have enabled the "Monthly recognition over time" revenue recognition model, the accounting period start date and end date must be on the first day and last day of the month, respectively. Note that the start and end dates do not necessarily have to be in the same month.
  **/
  postAccountingPeriod(
    req: operations.PostAccountingPeriodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAccountingPeriodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAccountingPeriodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/accounting-periods";

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
        const res: operations.PostAccountingPeriodResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postAccountingPeriodResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putCloseAccountingPeriod - Close an accounting period
   *
   * Close an accounting period by accounting period ID.
   * 
   * Prerequisites
   * -------------
   * You must have Zuora Finance enabled on your tenant. You must have the Manage Close Process and Run Trial Balance user permissions.
   * 
   * Limitations
   * -----------
   * * The accounting period cannot already be closed.
   * * The accounting period cannot be in the process of running a trial balance.
   * * All earlier accounting periods must be closed.
   * * There must be no required action items for the accounting period. See Reconcile Transactions Before Closing an Accounting Period for more information.
   * 
   * Notes
   * -----
   * When you close an accounting period in Zuora, a trial balance is automatically run for that period. A successful response means only that the accounting period is now closed, but does not mean that the trial balance has successfully completed.
  **/
  putCloseAccountingPeriod(
    req: operations.PutCloseAccountingPeriodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutCloseAccountingPeriodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutCloseAccountingPeriodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/accounting-periods/{ap-id}/close", req.pathParams);
    
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
        const res: operations.PutCloseAccountingPeriodResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
   * putPendingCloseAccountingPeriod - Set an accounting period to pending close
   *
   * Sets an accounting period to pending close.
   * 
   * 
   * Prerequisites
   * -------------
   * 
   * * You must have Zuora Finance enabled on your tenant.
   * * You must have the Manage Close Process and Run Trial Balance user permissions.
   * 
   *             
   * Limitations 
   *  -----------
   *  
   *  * The accounting period cannot be closed or pending close.
   *  
   *  * The accounting period cannot be in the process of running a trial balance.
   *  
   *  * All earlier accounting periods must be closed.
   *  
   *  
   * Notes
   * -----
   * When you set an accounting period to pending close in Zuora, a trial balance is automatically run for that period. A response of `{ "success": true }`  means only that the accounting period status is now pending close, but does not mean that the trial balance has successfully completed. You can use the Get Accounting Period REST API call to view details about the outcome of the trial balance.
   * 
  **/
  putPendingCloseAccountingPeriod(
    req: operations.PutPendingCloseAccountingPeriodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutPendingCloseAccountingPeriodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutPendingCloseAccountingPeriodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/accounting-periods/{ap-id}/pending-close", req.pathParams);
    
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
        const res: operations.PutPendingCloseAccountingPeriodResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
   * putReopenAccountingPeriod - Reopen an accounting period
   *
   * Re-opens an accounting period.
   * Prerequisites
   * -------------
   * * You must have Zuora Finance enabled on your tenant.
   * * You must have the Manage Close Process and Run Trial Balance user permissions.
   * 
   * Limitations
   * -----------
   * * The accounting period must be closed or pending close.
   * * You can only re-open an accounting period that is immediately previous to an open period.
  **/
  putReopenAccountingPeriod(
    req: operations.PutReopenAccountingPeriodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutReopenAccountingPeriodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutReopenAccountingPeriodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/accounting-periods/{ap-id}/reopen", req.pathParams);
    
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
        const res: operations.PutReopenAccountingPeriodResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
   * putRunTrialBalance - Run trial balance
   *
   * Runs the trial balance for an accounting period. 
   * 
   * Prerequisites
   * -------------
   * 
   * * You must have Zuora Finance enabled on your tenant.
   * 
   * * You must have the Manage Close Process and Run Trial Balance user permissions. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).
   * 
   *           
   * Limitations 
   * -----------
   *  
   *  * The accounting period must be open.
   *  
   *  * The accounting period cannot already be in the process of running a trial balance.
   *  
   * Notes
   * -----
   * The trial balance is run asynchronously. A response of `{ "success": true }` means only that the trial balance has started processing, but does not mean that the trial balance has successfully completed. You can use the [Get Accounting Period](https://www.zuora.com/developer/api-reference/#operation/GET_AccountingPeriod) REST API call to view details about the outcome of the trial balance.
   * 
  **/
  putRunTrialBalance(
    req: operations.PutRunTrialBalanceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRunTrialBalanceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRunTrialBalanceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/accounting-periods/{ap-id}/run-trial-balance", req.pathParams);
    
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
        const res: operations.PutRunTrialBalanceResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
   * putUpdateAccountingPeriod - Update an accounting period
   *
   * 
   * Updates an accounting period.
   * 
   * Prerequisites
   * -------------
   * 
   * * You must have Zuora Finance enabled on your tenant.
   * 
   * * You must have the Create Accounting Period user permission. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).
   * 
   * Limitations
   * -----------
   * 
   * * You can update the start date of only the earliest accounting period on your tenant. You cannot update the start date of later periods.
   * 
   * * If you update the earliest accounting period, the start date must be equal to or earlier than the date of the earliest transaction on the tenant.
   * 
   * * Start and end dates of accounting periods must be contiguous. For example, if one accounting period ends on January 31, the next period must start on February 1.
   * 
   * * If you have the Revenue Recognition Package and have enabled the "Monthly recognition over time" revenue recognition model, the accounting period start date and end date must be on the first day and last day of the month, respectively. Note that the start and end dates do not necessarily have to be in the same month.
   * 
   * * You cannot update the start date or end date of an accounting period if:
   *   * Any revenue has been distributed into the period.
   *   * The period has any active journal entries.
   * 
  **/
  putUpdateAccountingPeriod(
    req: operations.PutUpdateAccountingPeriodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutUpdateAccountingPeriodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutUpdateAccountingPeriodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/accounting-periods/{ap-id}", req.pathParams);

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
        const res: operations.PutUpdateAccountingPeriodResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
