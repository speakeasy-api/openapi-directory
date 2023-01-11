import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class WeatherForecast {
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
   * getVisualCrossingWebServicesRestServicesWeatherdataForecast - Weather Forecast API
   *
   * Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.
  **/
  getVisualCrossingWebServicesRestServicesWeatherdataForecast(
    req: operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest(req);
    }
    
    let baseURL: string = operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/VisualCrossingWebServices/rest/services/weatherdata/forecast";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
