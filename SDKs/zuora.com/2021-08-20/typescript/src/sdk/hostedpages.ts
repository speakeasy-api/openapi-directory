import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class HostedPages {
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
   * getHostedPages - List hosted pages
   *
   * Returns the Payment Pages configuration metadata,
   * specifically, page ID, page version, payment method type.
   * 
   * The following are the version-specific and general REST requests for Payment Pages:
   * 
   * * The request for Payment Pages 1.0 configuration information: `GET <BaseURL>/hostedpages?version=1`
   * * The request for Payment Pages 2.0 configuration information: `GET <BaseURL>/hostedpages?version=2`
   * * The request for all versions of Payment Pages configuration information: `GET <BaseURL>/hostedpages`
   * 
   * ## Notes
   * If you do not have the corresponding tenant setting enabled, e.g., the request `version` parameter set to 2 with the Payment Pages 2.0 setting disabled, you will receive an error.
   * 
  **/
  getHostedPages(
    req: operations.GetHostedPagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHostedPagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHostedPagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/hostedpages";
    
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
        const res: operations.GetHostedPagesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.getHostedPagesType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
