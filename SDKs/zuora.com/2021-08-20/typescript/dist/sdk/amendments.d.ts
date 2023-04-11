import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * You can use amendments to modify subscriptions. However, Zuora recommends you to use [Update subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription) (recommended) or [Amend](https://www.zuora.com/developer/api-reference/#operation/Action_POSTamend) to do so.
 *
 * @remarks
 *
 */
export declare class Amendments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve an amendment
     *
     * @remarks
     * Retrieves detailed information about the specified subscription amendment.
     */
    getAmendmentsByKey(req: operations.GETAmendmentsByKeyRequest, config?: AxiosRequestConfig): Promise<operations.GETAmendmentsByKeyResponse>;
    /**
     * List all amendments of a subscription
     *
     * @remarks
     * Retrieves detailed information about the amendment with the specified subscription.
     */
    getAmendmentsBySubscriptionID(req: operations.GETAmendmentsBySubscriptionIDRequest, config?: AxiosRequestConfig): Promise<operations.GETAmendmentsBySubscriptionIDResponse>;
    /**
     * CRUD: Delete an amendment
     *
     * @remarks
     *
     * Invoiced amendments cannot usually be deleted. One exception to this rule is auto-renew amendments. You can delete the last auto-renew amendment even if an invoice has been generated.
     *
     */
    objectDELETEAmendment(req: operations.ObjectDELETEAmendmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETEAmendmentResponse>;
    /**
     * CRUD: Retrieve an amendment
     */
    objectGETAmendment(req: operations.ObjectGETAmendmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETAmendmentResponse>;
    /**
     * CRUD: Update an amendment
     */
    objectPUTAmendment(req: operations.ObjectPUTAmendmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTAmendmentResponse>;
}
