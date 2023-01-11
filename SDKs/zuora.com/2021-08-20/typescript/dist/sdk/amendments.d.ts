import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Amendments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAmendmentsByKey - Retrieve an amendment
     *
     * Retrieves detailed information about the specified subscription amendment.
    **/
    getAmendmentsByKey(req: operations.GetAmendmentsByKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetAmendmentsByKeyResponse>;
    /**
     * getAmendmentsBySubscriptionId - List all amendments of a subscription
     *
     * Retrieves detailed information about the amendment with the specified subscription.
    **/
    getAmendmentsBySubscriptionId(req: operations.GetAmendmentsBySubscriptionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAmendmentsBySubscriptionIdResponse>;
    /**
     * objectDeleteAmendment - CRUD: Delete an amendment
     *
     *
     * Invoiced amendments cannot usually be deleted. One exception to this rule is auto-renew amendments. You can delete the last auto-renew amendment even if an invoice has been generated.
     *
    **/
    objectDeleteAmendment(req: operations.ObjectDeleteAmendmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDeleteAmendmentResponse>;
    /**
     * objectGetAmendment - CRUD: Retrieve an amendment
    **/
    objectGetAmendment(req: operations.ObjectGetAmendmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetAmendmentResponse>;
    /**
     * objectPutAmendment - CRUD: Update an amendment
    **/
    objectPutAmendment(req: operations.ObjectPutAmendmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutAmendmentResponse>;
}
