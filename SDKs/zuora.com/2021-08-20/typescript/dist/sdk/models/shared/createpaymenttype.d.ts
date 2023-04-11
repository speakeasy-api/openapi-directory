import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentDebitMemoApplicationCreateRequestType } from "./paymentdebitmemoapplicationcreaterequesttype";
import { PaymentInvoiceApplicationCreateRequestType } from "./paymentinvoiceapplicationcreaterequesttype";
/**
 * Whether the payment was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum CreatePaymentTypeFinanceInformationTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    No = "No",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * Container for the finance information related to the payment.
 *
 * @remarks
 *
 */
export declare class CreatePaymentTypeFinanceInformation extends SpeakeasyBase {
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
    transferredToAccounting?: CreatePaymentTypeFinanceInformationTransferredToAccountingEnum;
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
export declare class CreatePaymentTypeGatewayOptions extends SpeakeasyBase {
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
 * Payment transaction source used to differentiate the transaction source in Stored Credential Transaction framework.
 *
 * @remarks
 *   - `C_Unscheduled`: Cardholder-initiated transaction (CIT) that does not occur on scheduled or regularly occurring dates.
 *   - `M_Recurring`: Merchant-initiated transaction (MIT) that occurs at regular intervals.
 *   - `M_Unscheduled`: Merchant-initiated transaction (MIT) that does not occur on scheduled or regularly occurring dates.
 *
 */
export declare enum CreatePaymentTypeMitTransactionSourceEnum {
    CUnscheduled = "C_Unscheduled",
    MRecurring = "M_Recurring",
    MUnscheduled = "M_Unscheduled"
}
/**
 * The type of the payment.
 *
 * @remarks
 *
 */
export declare enum CreatePaymentTypeTypeEnum {
    External = "External",
    Electronic = "Electronic"
}
/**
 * Container for custom fields of a Payment object.
 *
 * @remarks
 *
 */
export declare class CreatePaymentType extends SpeakeasyBase {
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the payment's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
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
     * Date when the payment was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * Related transaction in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    transactionNS?: string;
    /**
     * The ID of the customer account that the payment is created for.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * The total amount of the payment.
     *
     * @remarks
     *
     */
    amount: number;
    /**
     * The authorization transaction ID from the payment gateway. Use this field for electronic payments, such as credit cards.
     *
     * @remarks
     *
     * When capturing the authorized funds after authorization enablement, `authTransactionId` must be used together with `gatewayOrderId`.
     *
     */
    authTransactionId?: string;
    /**
     * Additional information related to the payment.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * When Standalone Payment is not enabled, the `currency` of the payment must be the same as the payment currency defined in the customer account settings through Zuora UI.
     *
     * @remarks
     *
     * When Standalone Payment is enabled and `standalone` is `true`, the `currency` of the standalone payment can be different from the payment currency defined in the customer account settings. The amount will not be summed up to the account balance or key metrics regardless of currency.
     *
     */
    currency: string;
    /**
     * Container for debit memos. The maximum number of debit memos is 1,000.
     *
     * @remarks
     *
     */
    debitMemos?: PaymentDebitMemoApplicationCreateRequestType[];
    /**
     * The date when the payment takes effect, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    effectiveDate?: Date;
    /**
     * Container for the finance information related to the payment.
     *
     * @remarks
     *
     */
    financeInformation?: CreatePaymentTypeFinanceInformation;
    /**
     * The ID of the gateway instance that processes the payment. The ID must be a valid gateway instance ID and this gateway must support the specific payment method.
     *
     * @remarks
     *
     * - When creating electronic payments, this field is required.
     * - When creating external payments, this field is optional.
     *
     */
    gatewayId?: string;
    /**
     * The field used to pass gateway-specific parameters and parameter values.
     *
     * @remarks
     *
     */
    gatewayOptions?: CreatePaymentTypeGatewayOptions;
    /**
     * A merchant-specified natural key value that can be passed to the electronic payment gateway when a payment is created. If not specified, the payment number will be passed in instead.
     *
     * @remarks
     *
     * Gateways check duplicates on the gateway order ID to ensure that the merchant do not accidentally enter the same transaction twice. This ID can also be used to do reconciliation and tie the payment to a natural key in external systems. The source of this ID varies by merchant. Some merchants use their shopping cart order IDs, and others use something different. Merchants use this ID to track transactions in their eCommerce systems.
     *
     * When capturing the authorized funds after authorization enablement, `gatewayOrderId` must be used together with `authTransactionId`.
     *
     */
    gatewayOrderId?: string;
    /**
     * Container for invoices. The maximum number of invoices is 1,000.
     *
     * @remarks
     *
     */
    invoices?: PaymentInvoiceApplicationCreateRequestType[];
    /**
     * Payment transaction source used to differentiate the transaction source in Stored Credential Transaction framework.
     *
     * @remarks
     *   - `C_Unscheduled`: Cardholder-initiated transaction (CIT) that does not occur on scheduled or regularly occurring dates.
     *   - `M_Recurring`: Merchant-initiated transaction (MIT) that occurs at regular intervals.
     *   - `M_Unscheduled`: Merchant-initiated transaction (MIT) that does not occur on scheduled or regularly occurring dates.
     *
     */
    mitTransactionSource?: CreatePaymentTypeMitTransactionSourceEnum;
    /**
     * The unique ID of the payment method that the customer used to make the payment.
     *
     * @remarks
     *
     * If no payment method ID is specified in the request body, the default payment method for the customer account is used automatically. If the default payment method is different from the type of payments that you want to create, an error occurs.
     *
     */
    paymentMethodId?: string;
    /**
     * The transaction ID returned by the payment gateway. Use this field to reconcile payments between your gateway and Zuora Payments.
     *
     * @remarks
     *
     */
    referenceId?: string;
    /**
     * A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi.
     */
    softDescriptor?: string;
    /**
     * A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi.
     */
    softDescriptorPhone?: string;
    /**
     * This field is only available if support for standalone payments is enabled.
     *
     * @remarks
     *
     * Specify `true` to create a standalone payment that will be processed in Zuora through Zuora gateway integration but will be settled outside of Zuora.
     *
     * When `standalone` is set to `true`:
     *   - `accountId`, `amount`, `currency`, and `type` are required.
     *   - `type` must be `Electronic`.
     *   - `currency` of the payment can be different from the payment currency in the customer account settings.
     *   - The amount will not be summed up into the account balance and key metrics regardless of the payment currency.
     *   - No settlement data will be created.
     *   - Either the applied amount or the unapplied amount of the payment is zero.
     *   - The standalone payment cannot be applied, unapplied, or transferred.
     *
     * Specify `false` to create an ordinary payment that will be created, processed, and settled in Zuora. The `currency` of an ordinary payment must be the same as the currency in the customer account settings.
     *
     */
    standalone?: boolean;
    /**
     * The type of the payment.
     *
     * @remarks
     *
     */
    type: CreatePaymentTypeTypeEnum;
}
