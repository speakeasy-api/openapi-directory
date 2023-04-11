import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Value of the Customer Type field for the corresponding customer account in NetSuite. The Customer Type field is used when the customer account is created in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum POSTSubscriptionPreviewTypePreviewAccountInfoCustomerTypeNSEnum {
    Company = "Company",
    Individual = "Individual"
}
/**
 * Specifies whether the account should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum POSTSubscriptionPreviewTypePreviewAccountInfoSynctoNetSuiteNSEnum {
    Yes = "Yes",
    No = "No"
}
/**
 * Container for bill-to contact information of this account.
 *
 * @remarks
 *
 */
export declare class POSTSubscriptionPreviewTypePreviewAccountInfoBillToContact extends SpeakeasyBase {
    /**
     * The city of the bill-to address. The value should be 40 characters or less.
     *
     * @remarks
     *
     */
    city?: string;
    /**
     * The country of the bill-to address. The value must be a valid country name or abbreviation.
     *
     * @remarks
     *
     * **Note:** You must specify this field if you are using Zuora Tax for this account.
     *
     */
    country?: string;
    /**
     * The county of the bill-to address. The value should be 32 characters or less.
     *
     * @remarks
     *
     */
    county?: string;
    /**
     * The state of the bill-to address. The value must be a valid state or province name or 2-character abbreviation.
     *
     * @remarks
     *
     * **Note:** You must specify this field if you are using Zuora Tax for this account and the country is `USA` or `Canada`.
     *
     */
    state?: string;
    /**
     * If using Zuora Tax, a region string as optionally defined in your tax rules.
     *
     * @remarks
     *
     */
    taxRegion?: string;
    /**
     * The zip code of the bill-to address. The value should be 20 characters or less.
     *
     * @remarks
     *
     */
    zipCode?: string;
}
/**
 * Container for custom fields of an Account object.
 *
 * @remarks
 *
 */
export declare class POSTSubscriptionPreviewTypePreviewAccountInfo extends SpeakeasyBase {
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
    customerTypeNS?: POSTSubscriptionPreviewTypePreviewAccountInfoCustomerTypeNSEnum;
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
    synctoNetSuiteNS?: POSTSubscriptionPreviewTypePreviewAccountInfoSynctoNetSuiteNSEnum;
    /**
     * The account's bill cycle day (BCD), when bill runs generate invoices for the account. Specify any day of the month (`1`-`31`, where `31` = end-of-month), or `0` for auto-set.
     *
     * @remarks
     *
     */
    billCycleDay: number;
    /**
     * Container for bill-to contact information of this account.
     *
     * @remarks
     *
     */
    billToContact: POSTSubscriptionPreviewTypePreviewAccountInfoBillToContact;
    /**
     * A currency as defined in Billing Settings.
     *
     * @remarks
     *
     */
    currency: string;
}
