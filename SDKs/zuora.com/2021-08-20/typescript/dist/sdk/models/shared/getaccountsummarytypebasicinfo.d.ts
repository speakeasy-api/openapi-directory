import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Value of the Customer Type field for the corresponding customer account in NetSuite. The Customer Type field is used when the customer account is created in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum GETAccountSummaryTypeBasicInfoCustomerTypeNSEnum {
    Company = "Company",
    Individual = "Individual"
}
/**
 * Specifies whether the account should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum GETAccountSummaryTypeBasicInfoSynctoNetSuiteNSEnum {
    Yes = "Yes",
    No = "No"
}
export declare class GETAccountSummaryTypeBasicInfoDefaultPaymentMethod extends SpeakeasyBase {
    /**
     * Two-digit numeric card expiration month as `mm`.
     *
     * @remarks
     *
     */
    creditCardExpirationMonth?: string;
    /**
     * Four-digit card expiration year as `yyyy`.
     *
     * @remarks
     *
     */
    creditCardExpirationYear?: string;
    /**
     * Credit card number, 16 characters or less, displayed in masked format (e.g., ************1234).
     *
     * @remarks
     *
     */
    creditCardNumber?: string;
    /**
     * The type of the credit card.
     *
     * @remarks
     *
     * Possible values  include `Visa`, `MasterCard`, `AmericanExpress`, `Discover`, `JCB`, and `Diners`. For more information about credit card types supported by different payment gateways, see [Supported Payment Methods](https://knowledgecenter.zuora.com/Zuora_Central/Billing_and_Payments/L_Payment_Methods/Supported_Payment_Methods).
     *
     */
    creditCardType?: string;
    /**
     * ID of the default payment method associated with this account.
     *
     * @remarks
     *
     */
    id?: string;
    paymentMethodType?: string;
}
/**
 * Container for custom fields of an Account object.
 *
 * @remarks
 *
 */
export declare class GETAccountSummaryTypeBasicInfo extends SpeakeasyBase {
    /**
     * Value of the Class field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    classNS?: string;
    /**
     * Value of the Customer Type field for the corresponding customer account in NetSuite. The Customer Type field is used when the customer account is created in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    customerTypeNS?: GETAccountSummaryTypeBasicInfoCustomerTypeNSEnum;
    /**
     * Value of the Department field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    departmentNS?: string;
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the account's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * Value of the Location field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    locationNS?: string;
    /**
     * Value of the Subsidiary field for the corresponding customer account in NetSuite. The Subsidiary field is required if you use NetSuite OneWorld. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    subsidiaryNS?: string;
    /**
     * Date when the account was sychronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * Specifies whether the account should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    synctoNetSuiteNS?: GETAccountSummaryTypeBasicInfoSynctoNetSuiteNSEnum;
    /**
     * Account number.
     *
     * @remarks
     *
     */
    accountNumber?: string;
    /**
     * A list of additional email addresses to receive emailed invoices.
     *
     * @remarks
     *
     */
    additionalEmailAddresses?: string[];
    /**
     * Current outstanding balance.
     *
     * @remarks
     *
     */
    balance?: string;
    /**
     * The alias name given to a batch. A string of 50 characters or less.
     *
     * @remarks
     *
     */
    batch?: string;
    /**
     * Billing cycle day (BCD), the day of the month when a bill run generates invoices for the account.
     *
     * @remarks
     *
     */
    billCycleDay?: string;
    /**
     * A currency as defined in Billing Settings in the Zuora UI.
     *
     * @remarks
     *
     */
    currency?: string;
    defaultPaymentMethod?: GETAccountSummaryTypeBasicInfoDefaultPaymentMethod;
    /**
     * Account ID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Whether the customer wants to receive invoices through email.
     *
     * @remarks
     *
     */
    invoiceDeliveryPrefsEmail?: boolean;
    /**
     * Whether the customer wants to receive printed invoices, such as through postal mail.
     *
     * @remarks
     *
     */
    invoiceDeliveryPrefsPrint?: boolean;
    /**
     * Date of the most recent invoice for the account; null if no invoice has ever been generated.
     *
     * @remarks
     *
     */
    lastInvoiceDate?: Date;
    /**
     * Amount of the most recent payment collected for the account; null if no payment has ever been collected.
     *
     * @remarks
     *
     */
    lastPaymentAmount?: string;
    /**
     * Date of the most recent payment collected for the account. Null if no payment has ever been collected.
     *
     * @remarks
     *
     */
    lastPaymentDate?: Date;
    /**
     * Account name.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * Account status; possible values are: `Active`, `Draft`, `Canceled`.
     *
     * @remarks
     *
     */
    status?: string;
    tags?: string;
}
