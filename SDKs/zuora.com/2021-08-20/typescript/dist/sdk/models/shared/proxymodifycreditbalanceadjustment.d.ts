import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the credit balance adjustment.
 *
 * @remarks
 *
 */
export declare enum ProxyModifyCreditBalanceAdjustmentStatusEnum {
    Processed = "Processed",
    Canceled = "Canceled"
}
/**
 * Status of the credit balance adjustment's transfer to an external accounting system, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum ProxyModifyCreditBalanceAdjustmentTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * Container for custom fields of a Credit Balance Adjustment object.
 *
 * @remarks
 *
 */
export declare class ProxyModifyCreditBalanceAdjustment extends SpeakeasyBase {
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the credit balance adjustment's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * A code identifying the reason for the transaction. Must be an existing [reason code](https://knowledgecenter.zuora.com/CB_Billing/K_Payment_Operations/Reason_Codes_for_Payment_Operations) or empty.
     *
     * @remarks
     *
     */
    reasonCode?: string;
    /**
     * The status of the credit balance adjustment.
     *
     * @remarks
     *
     */
    status?: ProxyModifyCreditBalanceAdjustmentStatusEnum;
    /**
     * Date when the credit balance adjustment was sychronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * Status of the credit balance adjustment's transfer to an external accounting system, such as NetSuite.
     *
     * @remarks
     *
     */
    transferredToAccounting?: ProxyModifyCreditBalanceAdjustmentTransferredToAccountingEnum;
}
