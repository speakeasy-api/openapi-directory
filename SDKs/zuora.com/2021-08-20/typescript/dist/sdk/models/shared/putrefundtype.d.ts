import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the payment was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum PUTRefundTypeFinanceInformationTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    No = "No",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * Container for the finance information related to the refund.
 *
 * @remarks
 *
 */
export declare class PUTRefundTypeFinanceInformation extends SpeakeasyBase {
    /**
     * The accounting code that maps to a bank account in your accounting system.
     *
     * @remarks
     *
     */
    bankAccountAccountingCode?: string;
    /**
     * Whether the payment was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
     *
     * @remarks
     *
     */
    transferredToAccounting?: PUTRefundTypeFinanceInformationTransferredToAccountingEnum;
    /**
     * The accounting code for the unapplied payment.
     *
     * @remarks
     *
     */
    unappliedPaymentAccountingCode?: string;
}
/**
 * Container for custom fields of a Refund object.
 *
 * @remarks
 *
 */
export declare class PUTRefundType extends SpeakeasyBase {
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the refund's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * Origin of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    originNS?: string;
    /**
     * Date when the refund was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * Specifies whether the refund should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    synctoNetSuiteNS?: string;
    /**
     * Comments about the refund.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * Container for the finance information related to the refund.
     *
     * @remarks
     *
     */
    financeInformation?: PUTRefundTypeFinanceInformation;
    /**
     * A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.
     *
     * @remarks
     *
     */
    reasonCode?: string;
    /**
     * The transaction ID returned by the payment gateway. Use this field to reconcile refunds between your gateway and Zuora Payments.
     *
     * @remarks
     *
     * You can only update the reference ID for external refunds.
     *
     */
    referenceId?: string;
}
