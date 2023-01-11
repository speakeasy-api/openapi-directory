import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class SipConnectedAudio {
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
   * addCalloutCountries - Add internal call-out countries
   *
   * Specify the list of [call-out](https://support.zoom.us/hc/en-us/articles/200942859-How-To-Use-Telephone-Call-Out-) countries for a master account or a sub account. To add call-out enabled countries to a sub account, provide the account ID of the sub account in the `accountId` path parameter. To add call-out enabled countries to a master account, provide `me` as the value of the `accountId` path parameter.
   * <br><b>Prerequisites:</b><br>
   * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
   * **Scope:** `sip_trunk:master`
  **/
  addCalloutCountries(
    req: operations.AddCalloutCountriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddCalloutCountriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddCalloutCountriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/accounts/{accountId}/sip_trunk/callout_countries", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.AddCalloutCountriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.addCalloutCountries201ApplicationJSONObject = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * addInternalNumbers - Add internal numbers
   *
   * This API allows a master account with SIP Connected Audio plan to assign internal phone numbers (i.e., numbers that are not provided by Zoom but are owned by the organization consuming the API) to a master account or a sub account.<br><br>To add internal numbers to a sub account, provide the account ID of the sub account in the `accountId` path parameter. To add internal numbers to a master account, provide `me` as the value of the `accountId` path parameter.
   * <br><b>Prerequisites:</b><br>
   * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
   * **Scope:** `sip_trunk:master`
   * 
   * 
  **/
  addInternalNumbers(
    req: operations.AddInternalNumbersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddInternalNumbersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddInternalNumbersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/accounts/{accountId}/sip_trunk/internal_numbers", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.AddInternalNumbersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.addInternalNumbers201ApplicationJSONObject = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * assignSipConfig - Assign SIP trunk configuration
   *
   * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers' IP telephony network, will be connected over this trunk rather than over the PSTN. <br><br> Using this API, a master account owner can copy the SIP Connected Audio configurations applied on the master account and enable those configurations on a sub account. The owner can also disable the configuration in the sub account where it was previously enabled. 
   * **Prerequisites:**<br>
   * * Pro or a higher account with SIP Connected Audio plan enabled.
   * * master account Owner<br>
   * **Scopes:** `sip_trunk:master`<br> 
   * 
   *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
  **/
  assignSipConfig(
    req: operations.AssignSipConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AssignSipConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AssignSipConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/accounts/{accountId}/sip_trunk/settings", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AssignSipConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.assignSIPConfig204ApplicationJSONAny = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * assignSipTrunks - Assign SIP trunks
   *
   * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers’ IP telephony network, will be connected over this trunk rather than over the PSTN.<br><br>Use this API to assign SIP trunk(s) that are available on a master account to a sub account. <br><b>Prerequisites:</b><br>
   * * The account making this API request must be a master account with [API Partner Plan](https://zoom.us/plan/api) and SIP Connected Audio Plan.<br><br>
   * **Scope:** `sip_trunk:master`
  **/
  assignSipTrunks(
    req: operations.AssignSipTrunksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AssignSipTrunksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AssignSipTrunksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/accounts/{accountId}/sip_trunk/trunks", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.AssignSipTrunksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.assignSIPTrunks201ApplicationJSONObject = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * assignSipTrunkNumbers - Assign numbers
   *
   * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers' IP telephony network, will be connected over this trunk rather than over the PSTN. <br><br>Use this API to assign internal numbers to a sub account.
   * 
   * **Prerequisites:**<br>
   * * Pro or a higher account with SIP Connected Audio plan enabled.
   * * The account must be a master account<br>
   * **Scopes:** `sip_trunk:master`<br> 
   *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * 
  **/
  assignSipTrunkNumbers(
    req: operations.AssignSipTrunkNumbersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AssignSipTrunkNumbersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AssignSipTrunkNumbersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/accounts/{accountId}/sip_trunk/numbers", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.AssignSipTrunkNumbersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.assignSipTrunkNumbers201ApplicationJSONAny = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteAllSipNumbers - Delete all numbers
   *
   * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers' IP telephony network, will be connected over this trunk rather than over the PSTN. <br><br>Use this API to delete all internal numbers assigned to a sub account.
   * **Prerequisites:**<br>
   * 
   * * Pro or a higher account with SIP Connected Audio plan enabled.
   * * The account must be a master account<br>
   * **Scopes:** `sip_trunk:master`<br>
   *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
  **/
  deleteAllSipNumbers(
    req: operations.DeleteAllSipNumbersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAllSipNumbersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAllSipNumbersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/accounts/{accountId}/sip_trunk/numbers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAllSipNumbersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteAllSipNumbers204ApplicationJSONAny = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteInternalCallOutCountry - Delete internal call-out country
   *
   * Delete a previously assigned [call-out](https://support.zoom.us/hc/en-us/articles/200942859-How-To-Use-Telephone-Call-Out-) country from a master account or a sub account. To remove call-out country from a sub account, provide the account ID of the sub account in the `accountId` path parameter. To remove call-out country from a master account, provide `me` as the value of the `accountId` path parameter.
   * <br><b>Prerequisites:</b><br>
   * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
   * **Scope:** `sip_trunk:master`
  **/
  deleteInternalCallOutCountry(
    req: operations.DeleteInternalCallOutCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteInternalCallOutCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteInternalCallOutCountryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/accounts/{accountId}/sip_trunk/callout_countries/{countryId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteInternalCallOutCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteInternalCallOutCountry204ApplicationJSONAny = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteInternalNumber - Delete an internal number
   *
   * This API allows a master account with SIP Connected Audio plan to delete a previously assigned internal phone number from a master account or a sub account.<br><br>To delete an internal number from a sub account, provide the account ID of the sub account in the `accountId` path parameter. To delete an internal number from a master account, provide `me` as the value of the `accountId` path parameter.
   * <br><b>Prerequisites:</b><br>
   * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
   * **Scope:** `sip_trunk:master`
   * 
   * 
   * 
  **/
  deleteInternalNumber(
    req: operations.DeleteInternalNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteInternalNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteInternalNumberRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/accounts/{accountId}/sip_trunk/internal_numbers/{numberId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteInternalNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteInternalNumber204ApplicationJSONAny = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteSipTrunk - Delete a SIP trunk
   *
   * Use this API to remove existing SIP trunk of a sub account.<br>
   * <br><b>Prerequisites:</b><br>
   * * The account making this API request must be a master account with [API Partner Plan](https://zoom.us/plan/api) and SIP Connected Audio Plan.<br><br>
   * **Scope:** `sip_trunk:master`
  **/
  deleteSipTrunk(
    req: operations.DeleteSipTrunkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSipTrunkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSipTrunkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/accounts/{accountId}/sip_trunk/trunks/{trunkId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSipTrunkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteSIPTrunk204ApplicationJSONObject = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * listInternalCalloutCountries - List internal call-out countries
   *
   * Retrieve the list of internal [call-out](https://support.zoom.us/hc/en-us/articles/200942859-How-To-Use-Telephone-Call-Out-) countries of a master account or a sub account. To list call-out enabled countries of a sub account, provide the account ID of the sub account in the `accountId` path parameter. To list call-out enabled countries of a master account, provide `me` as the value of the `accountId` path parameter.
   * <br><b>Prerequisites:</b><br>
   * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
   * **Scope:** `sip_trunk:master`
  **/
  listInternalCalloutCountries(
    req: operations.ListInternalCalloutCountriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListInternalCalloutCountriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListInternalCalloutCountriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/accounts/{accountId}/sip_trunk/callout_countries", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListInternalCalloutCountriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listInternalCalloutCountries200ApplicationJSONObject = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * listInternalNumbers - List internal numbers
   *
   * This API allows a master account with SIP Connected Audio plan to list internal phone numbers (i.e., numbers that are not provided by Zoom but are owned by the organization consuming the API) assigned to a master account or a sub account.<br><br>To list internal numbers of a sub account, provide the account ID of the sub account in the `accountId` path parameter. To list internal numbers of a  master account, provide `me` as the value of the `accountId` path parameter.
   * <br><b>Prerequisites:</b><br>
   * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
   * **Scope:** `sip_trunk:master`
   * 
   * 
   * 
  **/
  listInternalNumbers(
    req: operations.ListInternalNumbersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListInternalNumbersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListInternalNumbersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/accounts/{accountId}/sip_trunk/internal_numbers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListInternalNumbersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listInternalNumbers200ApplicationJSONObject = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * listSipTrunks - List SIP trunks
   *
   * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers’ IP telephony network, will be connected over this trunk rather than over the PSTN.<br><br>
   * Use this API to list all the SIP trunks assigned to a master account or a sub account of the master account. To retrieve SIP trunks assigned to a sub account, provide the account ID of the sub account in the `accountId` path parameter. To retrieve SIP trunks of a master account, provide `me` as the value of the `accountId` path parameter. <br><br> **Scope:** `sip_trunk:read:admin`
   * <br><b>Prerequisites:</b><br>
   * * The account must either be a master account or a sub account with [API Partner Plan](https://zoom.us/plan/api) and SIP Connected Audio Plan.
  **/
  listSipTrunks(
    req: operations.ListSipTrunksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipTrunksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipTrunksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/accounts/{accountId}/sip_trunk/trunks", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListSipTrunksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listSIPTrunks200ApplicationJSONObject = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * listSipTrunkNumbers - List SIP trunk numbers
   *
   * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers' IP telephony network, will be connected over this trunk rather than over the PSTN. <br><br>Use this API to list all the numbers that are configured for SIP Connected Audio in a Zoom Account.
   * 
   * **Prerequisites:**<br>
   * * Pro or a higher account with SIP Connected Audio plan enabled.
   * * The account must be a master account<br>
   * **Scopes:** `sip_trunk:master`
   *  
   *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
  **/
  listSipTrunkNumbers(
    req: operations.ListSipTrunkNumbersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSipTrunkNumbersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSipTrunkNumbersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sip_trunk/numbers";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListSipTrunkNumbersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listSipTrunkNumbers200ApplicationJSONObject = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

}
