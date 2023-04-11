import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaymentMethodSnapshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Retrieve a payment method snapshot
     *
     * @remarks
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
     */
    objectGETPaymentMethodSnapshot(req: operations.ObjectGETPaymentMethodSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETPaymentMethodSnapshotResponse>;
}
