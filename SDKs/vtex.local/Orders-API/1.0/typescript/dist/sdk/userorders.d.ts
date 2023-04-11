import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserOrders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve user order details
     *
     * @remarks
     * Lists all details from a user's order, through client's perspective.
     *
     * > Note that these requests are meant to be made by **Call center operator** profiles. Otherwise, they will return only orders from the same email making the request.
     */
    userorderdetails(req: operations.UserorderdetailsRequest, config?: AxiosRequestConfig): Promise<operations.UserorderdetailsResponse>;
    /**
     * Retrieve user's orders
     *
     * @remarks
     * Lists all orders from a given client, filtering by their email.
     *
     * > Note that these requests are meant to be made by **Call center operator** profiles. Otherwise, they will return only orders from the same email making the request.
     */
    userorderslist(req: operations.UserorderslistRequest, config?: AxiosRequestConfig): Promise<operations.UserorderslistResponse>;
}
