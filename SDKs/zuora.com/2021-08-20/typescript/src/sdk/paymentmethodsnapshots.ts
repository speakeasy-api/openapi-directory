import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class PaymentMethodSnapshots {
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
   * objectGetPaymentMethodSnapshot - CRUD: Retrieve a payment method snapshot
   *
   * This REST API reference describes how to retrieve a Payment Method Snapshot.
   * 
   * A Payment Method Snapshot is a copy of the particular Payment Method used in a transaction. If the Payment Method is deleted, the Payment Method Snapshot continues to retain the data used in each of the past transactions.
   * 
   * ## Notes
   * The following Payment Method fields are not available in Payment Method Snapshots:
   * 
   * * `Active`
   * * `AchAddress1`
   * * `AchAddress2`
   * * `CreatedById`
   * * `CreatedDate`
   * * `UpdatedById`
   * * `UpdatedDate`
   * 
   * The Payment Method Snapshot field `PaymentMethodId` is not available in Payment Methods.
   * 
  **/
  objectGetPaymentMethodSnapshot(
    req: operations.ObjectGetPaymentMethodSnapshotRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ObjectGetPaymentMethodSnapshotResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ObjectGetPaymentMethodSnapshotRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/object/payment-method-snapshot/{id}", req.pathParams);
    
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
        const res: operations.ObjectGetPaymentMethodSnapshotResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.proxyGetPaymentMethodSnapshot = httpRes?.data;
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

}
