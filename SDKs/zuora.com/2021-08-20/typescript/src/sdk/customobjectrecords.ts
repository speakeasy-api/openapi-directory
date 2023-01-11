import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CustomObjectRecords {
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
   * deleteCustomObjectRecordById - Delete a custom object record
   *
   * Deletes a custom object record of the given type and ID.
   * 
   * Note that 200 response will be returned under either of the following conditions:
   * * The record is identified and successfully deleted
   * * The record could not be found
   * 
   * Note that the record is deleted immediately and, therefore, will not be retained upon successful deletion.
   * 
  **/
  deleteCustomObjectRecordById(
    req: operations.DeleteCustomObjectRecordByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCustomObjectRecordByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCustomObjectRecordByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/objects/records/default/{object}/{id}", req.pathParams);
    
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
        const res: operations.DeleteCustomObjectRecordByIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.deleteCustomObjectRecordByID200ApplicationJSONUriString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAllRecordsForCustomObjectType - List records for a custom object
   *
   * Lists all object records of the given type. You can also use the `q` query parameter to filter the output records.
   * 
   * ## Limitations 
   * 
   * This call has the following limitations:
   * * When a record is created, there will be a delay before it is available for search. For example, if you create 5 records and perform a query that these 5 records satisfy the query conditions, there will be a delay between when the 5 records are created, and when all the 5 records can be returned in the query result.
   * 
  **/
  getAllRecordsForCustomObjectType(
    req: operations.GetAllRecordsForCustomObjectTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllRecordsForCustomObjectTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllRecordsForCustomObjectTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/objects/records/default/{object}", req.pathParams);
    
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
        const res: operations.GetAllRecordsForCustomObjectTypeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.queryCustomObjectRecordsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCustomObjectRecordById - Retrieve a custom object record
   *
   * Retrieves a record of a given type by ID.
   * 
  **/
  getCustomObjectRecordById(
    req: operations.GetCustomObjectRecordByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomObjectRecordByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomObjectRecordByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/objects/records/default/{object}/{id}", req.pathParams);
    
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
        const res: operations.GetCustomObjectRecordByIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.customObjectRecordWithAllFields = httpRes?.data;
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
   * postCustomObjectRecords - Create custom object records
   *
   * Creates custom object records with the given type. 
   * 
   * Upon creating records of a custom object type, the 200 response contains a list of records that have been successfully processed and stored.
   * 
   * 
   * ## Limitations 
   * 
   * This call has the following limitations:
   * * The maximum number of records that you can create by one call is 1,000.
   * * The storage of empty strings in records is not supported.
   * * Null values must be formatted as the following example: 
   *   ```
   *   {
   *     "records": [
   *       {
   *         "fieldName__c": null
   *       }
   *     ]
   *   }
   *   ```
   * 
  **/
  postCustomObjectRecords(
    req: operations.PostCustomObjectRecordsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCustomObjectRecordsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCustomObjectRecordsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/objects/records/default/{object}", req.pathParams);

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
        const res: operations.PostCustomObjectRecordsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postCustomObjectRecordsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.customObjectRecordsErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse401Record = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.customObjectRecordsThrottledResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCustomObjectRecordsBatchUpdateOrDelete - Update or delete custom object records
   *
   * Makes a batch update or delete of custom object records.
   * ## Limitations 
   * 
   * This call has the following limitations:
   * * The maximum number of records that you can update by one call is 1,000.
   * * The maximum number of records that you can delete by one call is 1,000.
   * * The storage of empty strings in records is not supported.
   * * Null values must be formatted as the following example: 
   *   ```
   *   {
   *       "action": {
   *           "type": "update",
   *           "records": {
   *               "64edb2a5-2796-4e95-9559-846f8636a01b": {
   *                   "fieldName__c": null
   *             }
   *           }
   *       }
   *   }
   *   ```
   * 
  **/
  postCustomObjectRecordsBatchUpdateOrDelete(
    req: operations.PostCustomObjectRecordsBatchUpdateOrDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCustomObjectRecordsBatchUpdateOrDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCustomObjectRecordsBatchUpdateOrDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/objects/batch/default/{object}", req.pathParams);

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
        const res: operations.PostCustomObjectRecordsBatchUpdateOrDeleteResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.customObjectRecordsBatchUpdatePartialSuccessResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.customObjectRecordsErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse401Record = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.customObjectRecordsThrottledResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putCustomObjectRecord - Update a custom object record
   *
   * Updates a record of the given type and ID.
   * 
   * ## Limitations 
   * 
   * * The storage of empty strings in records is not supported.
   * * Null values must be formatted as the following example: 
   *   ```
   *   {
   *     "records": [
   *       {
   *         "fieldName__c": null
   *       }
   *     ]
   *   }
   *   ```
   * 
  **/
  putCustomObjectRecord(
    req: operations.PutCustomObjectRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutCustomObjectRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutCustomObjectRecordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/objects/records/default/{object}/{id}", req.pathParams);

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
        const res: operations.PutCustomObjectRecordResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.customObjectRecordWithAllFields = httpRes?.data;
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
   * patchPartialUpdateCustomObjectRecord - Partially update a custom object record
   *
   * Updates one or many fields of a custom object record. Patch update uses JSON Merge Patch as specified in [RFC 7386](https://tools.ietf.org/html/rfc7386).
   * 
   * ## Limitations 
   * 
   * * The storage of empty strings in records is not supported.
   * * Null values must be formatted as the following example: 
   *   ```
   *   {
   *     "records": [
   *       {
   *         "fieldName__c": null
   *       }
   *     ]
   *   }
   *   ```
   * 
  **/
  patchPartialUpdateCustomObjectRecord(
    req: operations.PatchPartialUpdateCustomObjectRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchPartialUpdateCustomObjectRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchPartialUpdateCustomObjectRecordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/objects/records/default/{object}/{id}", req.pathParams);

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
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchPartialUpdateCustomObjectRecordResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.customObjectRecordWithAllFields = httpRes?.data;
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
