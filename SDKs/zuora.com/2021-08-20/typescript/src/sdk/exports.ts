import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Exports {
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
   * objectGetExport - CRUD: Retrieve an export
   *
   * Use this operation to check the status of a data source export and access the exported data.
   * 
   * When you export data from Zuora, each exported file is available for download for 7 days. Data source exports (Export objects) older than 90 days are automatically deleted.
   * 
  **/
  objectGetExport(
    req: operations.ObjectGetExportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ObjectGetExportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ObjectGetExportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/object/export/{id}", req.pathParams);
    
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
        const res: operations.ObjectGetExportResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.proxyGetExport = httpRes?.data;
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
   * objectPostExport - CRUD: Create an export
   *
   * Use this operation to create a data source export. After you have created a data source export, use [CRUD: Retrieve an export](https://www.zuora.com/developer/api-reference/#operation/Object_GETExport) to check the status of the data source export and access the exported data.
   * 
   * ## Limits
   * 
   * Zuora system enforces the following limits on data source exports:
   * 
   * * The maximum processing time per export is 3 hours. If an export is executed for longer than 3 hours, it will be killed automatically.
   * * The maximum number of concurrent exports is 50 per tenant. Exports in `Pending` and `Processing` status are counted towards the concurrent export limit. Zuora system will reject the subsequent data source export requests once the concurrent export limit is reached.
   * 
   * When you export data from Zuora, each exported file is available for download for 7 days. Data source exports (Export objects) older than 90 days are automatically deleted.
   * 
   * **Note:** This operation supports the [Export ZOQL](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL) query language. However, this operation does not support some data sources, objects, and fields in Export ZOQL queries. For full compatibility with Export ZOQL, Zuora recommends that you use the [AQuA API](https://knowledgecenter.zuora.com/DC_Developers/T_Aggregate_Query_API) instead of this operation.
   * 
  **/
  objectPostExport(
    req: operations.ObjectPostExportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ObjectPostExportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ObjectPostExportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/object/export";

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
        const res: operations.ObjectPostExportResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
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

}
