import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ServicePrincipalAppRoleAssignedTo {
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
   * servicePrincipalsListAppRoleAssignedTo - Principals (users, groups, and service principals) that are assigned to this service principal.
  **/
  servicePrincipalsListAppRoleAssignedTo(
    req: operations.ServicePrincipalsListAppRoleAssignedToRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicePrincipalsListAppRoleAssignedToResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicePrincipalsListAppRoleAssignedToRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{tenantID}/servicePrincipals/{objectId}/appRoleAssignedTo", req.pathParams);
    
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
        const res: operations.ServicePrincipalsListAppRoleAssignedToResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.appRoleAssignmentListResult = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.appRoleAssignmentListResult = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.graphError = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.graphError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
