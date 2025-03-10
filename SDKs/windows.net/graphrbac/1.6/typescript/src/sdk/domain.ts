/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Domain {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Gets a specific domain in the current tenant.
   */
  domainsGet(
    req: operations.DomainsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DomainsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DomainsGetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/{tenantID}/domains/{domainName}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DomainsGetResponse =
        new operations.DomainsGetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.domain = utils.objectToClass(httpRes?.data);
          }
          if (utils.matchContentType(contentType, `text/json`)) {
            res.domain = utils.objectToClass(httpRes?.data);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Gets a list of domains for the current tenant.
   */
  domainsList(
    req: operations.DomainsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DomainsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DomainsListRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{tenantID}/domains", req);

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DomainsListResponse =
        new operations.DomainsListResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.domainListResult = utils.objectToClass(
              httpRes?.data,
              shared.DomainListResult
            );
          }
          if (utils.matchContentType(contentType, `text/json`)) {
            res.domainListResult = utils.objectToClass(
              httpRes?.data,
              shared.DomainListResult
            );
          }
          break;
      }

      return res;
    });
  }
}
