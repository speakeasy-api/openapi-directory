/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Events {
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
   * Get event
   */
  getEvent(
    req: operations.GetEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/self/events/{id}", req);

    const client: AxiosInstance = this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetEventResponse = new operations.GetEventResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.events = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.events = utils.objectToClass(
              httpRes?.data,
              shared.Event,
              resFieldDepth
            );
          }
          break;
        case [400, 422].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.objectToClass(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
        case [401, 403, 408, 500, 502].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * Get events count
   */
  getEventsCount(
    req: operations.GetEventsCountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventsCountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventsCountRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/self/events/count";

    const client: AxiosInstance = this._defaultClient;

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
      const res: operations.GetEventsCountResponse =
        new operations.GetEventsCountResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.eventsCount = utils.objectToClass(
              httpRes?.data,
              shared.EventsCount
            );
          }
          break;
        case [400, 422].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.objectToClass(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
        case [401, 403, 408, 500, 502].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * List events
   */
  listEvents(
    req: operations.ListEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEventsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/self/events";

    const client: AxiosInstance = this._defaultClient;

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
      const res: operations.ListEventsResponse =
        new operations.ListEventsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.events = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.events = utils.objectToClass(
              httpRes?.data,
              shared.Event,
              resFieldDepth
            );
          }
          break;
        case [400, 422].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.objectToClass(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
        case [401, 403, 408, 500, 502].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }
}
