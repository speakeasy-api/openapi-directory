import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CustomObjectDefinitions {
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
   * deleteCustomObjectDefinitionByType - Delete a custom object definition
   *
   * Deletes the custom object definition for the provided type.
   * 
   * **Note:** A custom object definition can only be deleted if no record of this custom object type exists.
   * 
  **/
  deleteCustomObjectDefinitionByType(
    req: operations.DeleteCustomObjectDefinitionByTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCustomObjectDefinitionByTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCustomObjectDefinitionByTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/objects/definitions/default/{object}", req.pathParams);
    
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
        const res: operations.DeleteCustomObjectDefinitionByTypeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.deleteCustomObjectDefinitionByType200ApplicationJSONUriString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAllCustomObjectDefinitionsInNamespace - List custom object definitions
   *
   * Get all custom objects definitions for a given tenant. If you want to copy all the existing custom objects from an old tenant to a new tenant, you can call this operation in your old tenant and then use its response directly as the request of the [Create custom object definitions](https://www.zuora.com/developer/api-reference/#operation/POST_CustomObjectDefinitions) call in the new tenant to import all the custom objects from the old tenant.
   * 
  **/
  getAllCustomObjectDefinitionsInNamespace(
    req: operations.GetAllCustomObjectDefinitionsInNamespaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllCustomObjectDefinitionsInNamespaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllCustomObjectDefinitionsInNamespaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/objects/definitions/default";
    
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
        const res: operations.GetAllCustomObjectDefinitionsInNamespaceResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getAllCustomObjectDefinitionsInNamespaceResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCustomObjectDefinitionByType - Retrieve a custom object definition
   *
   * Retrieves the custom object definition by type for the given tenant.
   * 
  **/
  getCustomObjectDefinitionByType(
    req: operations.GetCustomObjectDefinitionByTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomObjectDefinitionByTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomObjectDefinitionByTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/objects/definitions/default/{object}", req.pathParams);
    
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
        const res: operations.GetCustomObjectDefinitionByTypeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.customObjectDefinition = httpRes?.data;
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
   * postCustomObjectDefinitions - Create custom object definitions
   *
   * You can post custom object definitions with the request body schema described below. 
   * 
   * This operation also allows you to use the [List custom object definitions](https://www.zuora.com/developer/api-reference/#operation/GET_AllCustomObjectDefinitionsInNamespace) response schema as its request schema. If you want to copy all the existing custom objects from an old tenant to a new tenant, you can make a [List custom object definitions](https://www.zuora.com/developer/api-reference/#operation/GET_AllCustomObjectDefinitionsInNamespace) call in your old tenant and then use its response directly as the request of this operation in the new tenant to import all the custom objects from the old tenant.
   * 
   * The `label` field is the UI label of the custom object. The `object` field contains the API Name of the custom object.
   * 
   * ## Limitations 
   * 
   * This custom object definition has the following limitations:
   * 
   * * The maximum number of characters for the Custom Object API Name (`object`) is 64.
   * * The maximum number of characters for the Custom Object Label (`label`) is	64.
   * * The maximum number of characters for the Custom Object Description 250.
   * * The maximum number of custom fields in an custom object	is 50.
   * * The maximum number of characters for the custom field API name is	64.
   * * The maximum number of characters for the custom field label (`label`) is	64.
   * * The maximum number of characters for the custom field Description	is 250.
   * * The maximum number of picklist options is 250.
   * * The default maximum number of characters for the Text field is 512. You can configure the max length up to 4,096 characters when creating or updating the custom object definition via API.
   * 
  **/
  postCustomObjectDefinitions(
    req: operations.PostCustomObjectDefinitionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCustomObjectDefinitionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCustomObjectDefinitionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/objects/definitions/default";

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
        const res: operations.PostCustomObjectDefinitionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getAllCustomObjectDefinitionsInNamespaceResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.commonErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postUpdateCustomObjectDefinition - Update a custom object definition
   *
   * Updates a custom object definition by posting migration resource to initiate the migration of definitions.
   * 
   * ## Limitations 
   * 
   * Updating custom field definition has the following limitations:
   * 
   * * You can only have one action per update request.
   * * You cannot delete fields from custom objects that contain records.
   * * You can only add required fields to custom objects with no records.
   * * You can change optional fields to required only on the custom objects with no records. 
   * 
  **/
  postUpdateCustomObjectDefinition(
    req: operations.PostUpdateCustomObjectDefinitionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUpdateCustomObjectDefinitionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUpdateCustomObjectDefinitionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/objects/migrations";

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
        const res: operations.PostUpdateCustomObjectDefinitionResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.migrationUpdateCustomObjectDefinitionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
