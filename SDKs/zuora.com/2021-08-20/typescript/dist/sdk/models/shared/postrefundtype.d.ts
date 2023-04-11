import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the refund was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum PostRefundTypeFinanceInformationTransferredToAccountingEnum {
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
export declare class PostRefundTypeFinanceInformation extends SpeakeasyBase {
    /**
     * The accounting code that maps to a bank account in your accounting system.
     *
     * @remarks
     *
     */
    bankAccountAccountingCode?: string;
    /**
     * Whether the refund was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
     *
     * @remarks
     *
     */
    transferredToAccounting?: PostRefundTypeFinanceInformationTransferredToAccountingEnum;
    /**
     * The accounting code for the unapplied payment.
     *
     * @remarks
     *
     */
    unappliedPaymentAccountingCode?: string;
}
/**
 * The field used to pass gateway-specific parameters and parameter values.
 *
 * @remarks
 *
 */
export declare class PostRefundTypeGatewayOptions extends SpeakeasyBase {
    /**
     * The name of a gateway-specific parameter.
     *
     * @remarks
     *
     */
    key?: string;
    /**
     * The value of the gateway-specific parameter.
     *
     * @remarks
     *
     */
    value?: string;
}
/**
 * How an external refund was issued to a customer. This field is required for an external refund and must be left empty for an electronic refund. You can issue an external refund on an electronic payment.
 *
 * @remarks
 *
 */
export declare enum PostRefundTypeMethodTypeEnum {
    Ach = "ACH",
    Cash = "Cash",
    Check = "Check",
    CreditCard = "CreditCard",
    PayPal = "PayPal",
    WireTransfer = "WireTransfer",
    DebitCard = "DebitCard",
    CreditCardReferenceTransaction = "CreditCardReferenceTransaction",
    BankTransfer = "BankTransfer",
    Other = "Other"
}
/**
 * The type of the refund.
 *
 * @remarks
 *
 */
export declare enum PostRefundTypeTypeEnum {
    External = "External",
    Electronic = "Electronic"
}
/**
 * Container for custom fields of a Refund object.
 *
 * @remarks
 *
 */
export declare class PostRefundType extends SpeakeasyBase {
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
    financeInformation?: PostRefundTypeFinanceInformation;
    /**
     * The field used to pass gateway-specific parameters and parameter values.
     *
     * @remarks
     *
     */
    gatewayOptions?: PostRefundTypeGatewayOptions;
    /**
     * How an external refund was issued to a customer. This field is required for an external refund and must be left empty for an electronic refund. You can issue an external refund on an electronic payment.
     *
     * @remarks
     *
     */
    methodType?: PostRefundTypeMethodTypeEnum;
    /**
     * A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.
     *
     * @remarks
     *
     */
    reasonCode?: string;
    /**
     * The transaction ID returned by the payment gateway for an electronic refund. Use this field to reconcile refunds between your gateway and Zuora Payments.
     *
     * @remarks
     *
     */
    referenceId?: string;
    /**
     * The date when the refund takes effect, in `yyyy-mm-dd` format. The date of the refund cannot be before the payment date. Specify this field only for external refunds. Zuora automatically generates this field for electronic refunds.
     *
     * @remarks
     *
     */
    refundDate?: Date;
    /**
     * The transaction ID returned by the payment gateway if there is an additional transaction for the refund. Use this field to reconcile payments between your gateway and Zuora Payments.
     *
     * @remarks
     *
     */
    secondRefundReferenceId?: string;
    /**
     * A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi.
     */
    softDescriptor?: string;
    /**
     * A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi.
     */
    softDescriptorPhone?: string;
    /**
     * The total amount of the refund. The amount cannot exceed the unapplied amount of the associated payment. If the original payment was applied to one or more invoices or debit memos, you have to unapply a full or partial payment from the invoices or debit memos, and then refund the full or partial unapplied payment to your customers.
     *
     * @remarks
     *
     */
    totalAmount: number;
    /**
     * The type of the refund.
     *
     * @remarks
     *
     */
    type: PostRefundTypeTypeEnum;
}
