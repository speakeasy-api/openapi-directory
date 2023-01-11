import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class PaymentMethods {
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
   * deletePaymentMethods - Delete a payment method
   *
   * Deletes a credit card payment method.
   * 
   * If the specified payment method is the account's default payment
   * method, the request will fail.  In that case, you must first designate a
   * different payment method for that customer to be the default.
   * 
   * For a use case of this operation, see [Configure Payment Methods](https://www.zuora.com/developer/api-guides/#Configure-payment-methods).
   * 
  **/
  deletePaymentMethods(
    req: operations.DeletePaymentMethodsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePaymentMethodsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePaymentMethodsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-methods/{payment-method-id}", req.pathParams);
    
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
        const res: operations.DeletePaymentMethodsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
   * getPaymentMethod - Retrieve a payment method
   *
   * This operation allows you to get the detailed information about a payment method.
   * 
  **/
  getPaymentMethod(
    req: operations.GetPaymentMethodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentMethodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentMethodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-methods/{payment-method-id}", req.pathParams);
    
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
        const res: operations.GetPaymentMethodResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getPaymentMethodResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPaymentMethodsCreditCard - List all credit card payment methods of an account
   *
   * This REST API reference describes how to retrieve all credit card
   * information for the specified customer account. 
   * 
   * ## Notes
   * The response includes details of credit or debit cards for the specified customer account. Card numbers are masked, e.g., "************1234". Cards are returned in reverse chronological order of last update.
   * 
   * Though you can also send requests for bank transfer, ACH, or other supported payment methods, the response will not include effective details of these payment methods.
   * 
  **/
  getPaymentMethodsCreditCard(
    req: operations.GetPaymentMethodsCreditCardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentMethodsCreditCardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentMethodsCreditCardRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-methods/credit-cards/accounts/{account-key}", req.pathParams);
    
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
        const res: operations.GetPaymentMethodsCreditCardResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getPaymentMethodsType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getStoredCredentialProfiles - List stored credential profiles of a payment method
   *
   * Retrieves the stored credential profiles within a payment method.
   * 
   * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
   * 
  **/
  getStoredCredentialProfiles(
    req: operations.GetStoredCredentialProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStoredCredentialProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStoredCredentialProfilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-methods/{payment-method-id}/profiles", req.pathParams);
    
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
        const res: operations.GetStoredCredentialProfilesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getStoredCredentialProfilesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * objectDeletePaymentMethod - CRUD: Delete a payment method
  **/
  objectDeletePaymentMethod(
    req: operations.ObjectDeletePaymentMethodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ObjectDeletePaymentMethodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ObjectDeletePaymentMethodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/object/payment-method/{id}", req.pathParams);
    
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
        const res: operations.ObjectDeletePaymentMethodResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.proxyDeleteResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.proxyUnauthorizedResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * objectGetPaymentMethod - CRUD: Retrieve a payment method
  **/
  objectGetPaymentMethod(
    req: operations.ObjectGetPaymentMethodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ObjectGetPaymentMethodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ObjectGetPaymentMethodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/object/payment-method/{id}", req.pathParams);
    
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
        const res: operations.ObjectGetPaymentMethodResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.proxyGetPaymentMethod = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.proxyUnauthorizedResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.proxyNoDataResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * objectPostPaymentMethod - CRUD: Create a payment method
  **/
  objectPostPaymentMethod(
    req: operations.ObjectPostPaymentMethodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ObjectPostPaymentMethodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ObjectPostPaymentMethodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/object/payment-method";

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
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ObjectPostPaymentMethodResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.proxyCreateOrModifyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.proxyBadRequestResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.proxyUnauthorizedResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * objectPutPaymentMethod - CRUD: Update a payment method
   *
   * For a use case of this operation, see [Configure Payment Methods](https://www.zuora.com/developer/api-guides/#Configure-payment-methods).
  **/
  objectPutPaymentMethod(
    req: operations.ObjectPutPaymentMethodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ObjectPutPaymentMethodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ObjectPutPaymentMethodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/object/payment-method/{id}", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ObjectPutPaymentMethodResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.proxyCreateOrModifyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.proxyUnauthorizedResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCancelAuthorization - Cancel authorization
   *
   * **Note:** If you wish to enable this feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
   * 
   * Allows you to cancel an authorization. The payment gateways that support this operation include Verifi, CyberSource 1.28, CyberSource 1.97, Chase Paymentech Orbital, and Ingenico ePayments.
   * 
  **/
  postCancelAuthorization(
    req: operations.PostCancelAuthorizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCancelAuthorizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCancelAuthorizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-methods/{payment-method-id}/voidAuthorize", req.pathParams);

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
        const res: operations.PostCancelAuthorizationResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postVoidAuthorizeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCancelStoredCredentialProfile - Cancel a stored credential profile
   *
   * Cancels a stored credential profile within a payment method.
   * 
   * Cancelling the stored credential profile indicates that the stored credentials are no longer valid, per a customer request. You cannot reactivate the stored credential profile after you have cancelled it.
   * 
   * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
   * 
  **/
  postCancelStoredCredentialProfile(
    req: operations.PostCancelStoredCredentialProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCancelStoredCredentialProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCancelStoredCredentialProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-methods/{payment-method-id}/profiles/{profile-number}/cancel", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCancelStoredCredentialProfileResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.modifiedStoredCredentialProfileResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCreateAuthorization - Create authorization
   *
   * **Note:** If you want to enable this feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
   * 
   * Enables you to authorize the availability of funds for a transaction but delay the capture of funds until a later time. Subsequently, use [CRUD: Create a payment](https://www.zuora.com/developer/api-reference/#operation/Object_POSTPayment) or [Create a payment](https://www.zuora.com/developer/api-reference/#operation/POST_CreatePayment) to capture the authorized funds, or use [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization) to cancel the authorization. 
   * 
   * The payment gateways that support this operation include:
   * 
   * * Adyen integration v2.0 - This gateway does not support [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization).
   * * CyberSource 1.28
   * * CyberSource 1.97
   * * CyberSource 2.0 - This gateway does not support [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization).
   * * Chase Paymentech Orbital
   * * Ingenico ePayments
   * * Verifi - This gateway does not support [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization).
   * 
   * Note that CyberSource 2.0 supports the Delayed Capture feature for both Credit Cards and Credit Card Reference payment methods.
   * 
   * If you have the Invoice Settlement feature enabled, use the [Create payment](https://www.zuora.com/developer/api-reference/#operation/POST_CreatePayment) operation to capture the funds instead of the [CRUD: Create payment](https://www.zuora.com/developer/api-reference/#operation/Object_POSTPayment) operation.
   *       
   * 
  **/
  postCreateAuthorization(
    req: operations.PostCreateAuthorizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCreateAuthorizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCreateAuthorizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-methods/{payment-method-id}/authorize", req.pathParams);

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
        const res: operations.PostCreateAuthorizationResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postAuthorizeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCreateStoredCredentialProfile - Create a stored credential profile
   *
   * Creates a stored credential profile within a payment method.
   * 
   * The stored credential profile represents a consent agreement that you have established with a customer. When you use the payment method in a transaction, Zuora may include information from the stored credential profile to inform the payment processor that the transaction is related to your pre-existing consent agreement with the customer.
   * 
   * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
   * 
  **/
  postCreateStoredCredentialProfile(
    req: operations.PostCreateStoredCredentialProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCreateStoredCredentialProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCreateStoredCredentialProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-methods/{payment-method-id}/profiles", req.pathParams);

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
        const res: operations.PostCreateStoredCredentialProfileResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.modifiedStoredCredentialProfileResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postExpireStoredCredentialProfile - Expire a stored credential profile
   *
   * Expires a stored credential profile within a payment method.
   * 
   * Expiring the stored credential profile indicates that the stored credentials are no longer valid, per an expiration policy in the stored credential transaction framework. You cannot reactivate the stored credential profile after you have expired it.
   * 
   * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
   * 
  **/
  postExpireStoredCredentialProfile(
    req: operations.PostExpireStoredCredentialProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostExpireStoredCredentialProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostExpireStoredCredentialProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-methods/{payment-method-id}/profiles/{profile-number}/expire", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostExpireStoredCredentialProfileResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.modifiedStoredCredentialProfileResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPaymentMethods - Create a payment method
   *
   * You can use this operation to create either a payment method associated with a specific customer account, or an orphan payment method that is not associated with any customer account. The orphan payment method must be associated with a customer account within 10 days. Otherwise, it will be deleted.
   * 
   * This operation supports the payment methods listed below.
   * 
   * ### PayPal Express Checkout
   * The following request body fields are specific to this payment method:
   * * `BAID` (required)
   * * `email` (required)
   * 
   * ### PayPal Native Express Checkout
   * The following request body fields are specific to this payment method:
   * * `BAID` (required)
   * * `email` (optional)
   * 
   * ### PayPal Adaptive
   * The following request body fields are specific to this payment method:
   * * `preapprovalKey` (required)
   * * `email` (required)
   * 
   * ### Credit Card
   * The following request body fields are specific to this payment method:
   * * `cardHolderInfo` (`cardHolderName` required)
   * * `cardNumber` (required)
   * * `cardType` (required)
   * * `expirationMonth` (required)
   * * `expirationYear` (required)
   * * `mitConsentAgreementRef`
   * * `mitConsentAgreementSrc`
   * * `mitNetworkTransactionId`
   * * `mitProfileAction`
   * * `mitProfileType`
   * * `mitProfileAgreedOn`
   * * `securityCode`
   * * `checkDuplicated`
   * 
   * 
   * 
   * ### ACH
   * The following request body fields are applicable to this payment method:
   * * `bankABACode` (required)
   * * `bankAccountName` (required)
   * * `bankAccountNumber` (required)
   * * `bankAccountType` (required)
   * * `bankName` (required)
   * * `addressLine1`
   * * `addressLine2`
   * * `phone`
   * * `email`
   * * `city`
   * * `country`
   * * `state`
   * * `zipCode`
   * 
   * ### SEPA
   * The following request body fields are applicable to this payment method:
   * * `IBAN` (required)
   * * `accountHolderInfo` (required)
   * * `businessIdentificationCode`
   * 
   * 
   * ### Betalingsservice (Direct Debit DK)
   * The following request body fields are applicable to this payment method:
   * * `accountNumber` (required)
   * * `identityNumber` (required)
   * * `bankCode` (required)
   * * `accountHolderInfo` (required)
   * 
   * 
   * ### Autogiro (Direct Debit SE)
   * The following request body fields are applicable to this payment method:        
   * * `accountNumber` (required)
   * * `identityNumber` (required)
   * * `branchCode` (required)
   * * `accountHolderInfo` (required) 
   * 
   * 
   * ### Bacs (Direct Debit UK)
   * The following request body fields are applicable to this payment method:        
   * * `accountNumber` (required)
   * * `bankCode` (required)
   * * `accountHolderInfo` (required)
   * 
   * 
   * ### Becs (Direct Entry AU)
   * The following request body fields are applicable to this payment method:        
   * * `accountNumber` (required)
   * * `branchCode` (required)
   * * `accountHolderInfo` (required)
   * 
   * 
   * ### Becsnz (Direct Debit NZ)
   * The following request body fields are applicable to this payment method:        
   * * `accountNumber` (required)
   * * `bankCode` (required)
   * * `branchCode` (required)
   * * `accountHolderInfo` (required)
   * 
   * 
   * ### PAD (Pre-Authorized Debit)
   * The following request body fields are applicable to this payment method:        
   * * `accountNumber` (required)
   * * `bankCode` (required)
   * * `branchCode` (required)
   * * `accountHolderInfo` (required)
   * 
   * 
   * ### Custom payment methods
   * Note: This feature is in the Early Adopter phase. If you want to use this feature, submit a request at [Zuora Global Support](http://support.zuora.com/) to enable the Universal Payment Connector and Open Payment Method services that support this feature.
   * 
   * With the support of Universal Payment Connector (UPC) and Open Payment Method (OPM) services, you can create custom payment methods by using the fields defined in a definition file for this type of custom payment method. See [Set up custom payment gateways and payment methods](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/MB_Set_up_custom_payment_gateways_and_payment_methods) for details.
   * 
  **/
  postPaymentMethods(
    req: operations.PostPaymentMethodsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPaymentMethodsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPaymentMethodsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/payment-methods";

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
        const res: operations.PostPaymentMethodsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postPaymentMethodResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPaymentMethodsCreditCard - Create a credit card payment method
   *
   * You can create a credit card payment method for a customer account or an orphan credit card payment method that is not associated with any customer account. The orphan payment method must be associated with a customer account within 10 days. Otherwise, it will be deleted.
   * 
   * This API call is CORS Enabled. Use client-side JavaScript to invoke the call. 
   * 
   * **Note**: If you use this operation to create credit card payment methods instead of using the [iFrame of Hosted Payment Pages](https://knowledgecenter.zuora.com/CB_Billing/LA_Hosted_Payment_Pages/C_Hosted_Payment_Pages/B_Implementing_Hosted_Payment_Pages_on_Your_Website/C_Embed_and_Submit_the_iFrame), you are subject to PCI-compliance audit requirements.
   * 
  **/
  postPaymentMethodsCreditCard(
    req: operations.PostPaymentMethodsCreditCardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPaymentMethodsCreditCardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPaymentMethodsCreditCardRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/payment-methods/credit-cards";

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
        const res: operations.PostPaymentMethodsCreditCardResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postPaymentMethodResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPaymentMethodsDecryption - Create an Apple Pay payment method
   *
   * The decryption API endpoint can conditionally perform 3 tasks in one atomic call:
   *   * Decrypt Apple Pay Payment token
   *   * Create Credit Card Payment Method in Zuora with decrypted Apple Pay information
   *   * Process Payment on a specified Invoice (optional)
   * 
  **/
  postPaymentMethodsDecryption(
    req: operations.PostPaymentMethodsDecryptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPaymentMethodsDecryptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPaymentMethodsDecryptionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/payment-methods/decryption";

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
        const res: operations.PostPaymentMethodsDecryptionResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postPaymentMethodResponseDecryption = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putPaymentMethod - Update a payment method
   *
   * This operation allows you to update an existing payment method. 
   * 
   * The following request body fields can be updated regardless of payment method types:
   * * `authGateway`
   * * `gatewayOptions`
   * * `accountHolderInfo`
   * * Custom fields
   * 
   * The following request body fields can be updated only for the Credit Card payment method:
   * * `expirationMonth` 
   * * `expirationYear`
   * * `securityCode`
   * 
  **/
  putPaymentMethod(
    req: operations.PutPaymentMethodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutPaymentMethodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutPaymentMethodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-methods/{payment-method-id}", req.pathParams);

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
        const res: operations.PutPaymentMethodResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.putPaymentMethodResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putPaymentMethodsCreditCard - Update a credit card payment method
   *
   * Updates an existing credit card payment method.
   * 
  **/
  putPaymentMethodsCreditCard(
    req: operations.PutPaymentMethodsCreditCardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutPaymentMethodsCreditCardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutPaymentMethodsCreditCardRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-methods/credit-cards/{payment-method-id}", req.pathParams);

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
        const res: operations.PutPaymentMethodsCreditCardResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.putPaymentMethodResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putScrubPaymentMethods - Scrub a payment method
   *
   * 
   * This operation enables you to replace all sensitive data in a payment method, related payment method snapshot table, and four related log tables with dummy values that will be stored in Zuora databases. 
   * 
   * This operation will scrub the sensitive data and soft-delete the specified payment method at the same time. 
   * 
   * If you want to delete or anonymize personal data in Zuora, you must scrub the payment method before anonymizing the associated account and contact. See [Delete or anonymize personal data](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Responding_to_individual_requests_for_access%2C_correction%2C_and_deletion_of_data_under_applicable_privacy_laws#Edit_and_correct_personal_data) for more information.
   * 
   * **Note:** In order to use this operation, you must ensure that the **Scrub Sensitive Data of Specific Payment Method payments** permission is enabled in your user role. Contact your tenant administrator if you want to enable this permission. See [Scrub Payment Methods](https://knowledgecenter.zuora.com/CB_Billing/L_Payment_Methods/Scrub_Payment_Methods) for more information.
   * 
  **/
  putScrubPaymentMethods(
    req: operations.PutScrubPaymentMethodsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutScrubPaymentMethodsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutScrubPaymentMethodsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-methods/{payment-method-id}/scrub", req.pathParams);
    
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
        const res: operations.PutScrubPaymentMethodsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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
   * putVerifyPaymentMethods - Verify a payment method
   *
   * Sends an authorization request to the corresponding payment gateway to verify the payment method, even though no changes are made for the payment method. Supported payment methods are Credit Cards and Paypal.
   * 
   * Zuora now supports performing a standalone zero dollar verification or one dollar authorization for credit cards. It also supports a billing agreement status check on PayPal payment methods.
   * 
   * If a payment method is created by Hosted Payment Pages and is not assigned to any billing account, the payment method cannot be verified through this operation.
   * 
  **/
  putVerifyPaymentMethods(
    req: operations.PutVerifyPaymentMethodsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutVerifyPaymentMethodsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutVerifyPaymentMethodsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payment-methods/{payment-method-id}/verify", req.pathParams);

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
        const res: operations.PutVerifyPaymentMethodsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.putVerifyPaymentMethodResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
