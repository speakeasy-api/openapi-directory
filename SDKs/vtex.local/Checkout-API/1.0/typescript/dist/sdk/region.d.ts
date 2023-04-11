import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Region {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get sellers by region or address
     *
     * @remarks
     * Retrieve a list of sellers that cater to a specific region or address, according to your set up of our [regionalization feature](https://help.vtex.com/en/tutorial/setting-up-price-and-availability-of-skus-by-region--12ne58BmvYsYuGsimmugoc#). Learn more about [Region v2](https://developers.vtex.com/vtex-developer-docs/changelog/region-v2).
     *
     *
  To access the list of sellers, you must choose one of the following methods:
     *
     *
  1. Send the identification of the list of sellers (`regionId`) as a path parameter through the URL. Or;
     *
  2. Send the `country` (3-digit ISO code) and at least one of the two values (`postal Code` or `geo Coordinates`) as query parameters through the URL. For this method, it is also allowed to send both values (`postalCode` or `geoCoordinates`) in the same request.
     */
    getSellersByRegion(req: operations.GetSellersByRegionRequest, config?: AxiosRequestConfig): Promise<operations.GetSellersByRegionResponse>;
}
