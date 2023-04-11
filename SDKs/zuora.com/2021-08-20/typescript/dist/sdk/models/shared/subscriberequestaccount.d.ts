import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Value of the Customer Type field for the corresponding customer account in NetSuite. The Customer Type field is used when the customer account is created in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum SubscribeRequestAccountCustomerTypeNSEnum {
    Company = "Company",
    Individual = "Individual"
}
/**
 * Specifies whether the account should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum SubscribeRequestAccountSynctoNetSuiteNSEnum {
    Yes = "Yes",
    No = "No"
}
/**
 * Container for custom fields of an Account object.
 *
 * @remarks
 *
 */
export declare class SubscribeRequestAccount extends SpeakeasyBase {
    /**
     * Unique account number assigned to the account.
     *
     * @remarks
     *
     * **Character limit**: 50
     *
     *
     * **Values**: one of the following:
     *
     * - null to auto-generate
     * - a string of 50 characters or fewer that doesn't begin with the default account number prefix
     *
     */
    accountNumber?: string;
    /**
     * List of additional email addresses to receive emailed invoices.
     *
     * @remarks
     *
     * **Character limit**: 120
     *
     *
     * **Values**: comma-separated list of email addresses
     */
    additionalEmailAddresses?: string;
    /**
     *  Indicates if associated invoices can be edited.
     *
     * @remarks
     *
     *
     * **Character limit**: 5
     *
     *
     * **Values**: `true`, `false` (default if left null)
     */
    allowInvoiceEdit?: boolean;
    /**
     *  Indicates if future payments are automatically collected when they're due during a Payment Run.
     *
     * @remarks
     *
     *
     * **Character limit**: 5
     *
     *
     * **Values**: `true`, `false` (default)
     */
    autoPay?: boolean;
    /**
     *  Organizes your customer accounts into groups to optimize your billing and payment operations.
     *
     * @remarks
     *
     *
     * **Character limit**: 20
     *
     *
     * **Values**:any system-defined batch (`Batch1` - `Batch50 `or by name).
     */
    batch: string;
    /**
     * Billing cycle day setting option.
     *
     * @remarks
     *
     * **Character limit**: 9
     *
     *
     * **Values**: `AutoSet`, `ManualSet`
     */
    bcdSettingOption?: string;
    /**
     * Billing cycle day (BCD) on which bill runs generate invoices for the account.
     *
     * @remarks
     *
     * **Character limit**: 2
     *
     *
     * **Values**: any activated system-defined bill cycle day (`1` - `31`)
     */
    billCycleDay: number;
    /**
     * Value of the Class field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    classNS?: string;
    /**
     * Associates the account with a specified communication profile.
     *
     * @remarks
     *
     * **Character limit**: 32
     *
     *
     * **Values**: a valid communication profile ID
     */
    communicationProfileId?: string;
    /**
     * CRM account ID for the account. A CRM is a customer relationship management system, such as Salesforce.com.
     *
     * @remarks
     *
     * **Character limit**: 100
     *
     *
     * **Values**: a string of 100 characters or fewer
     */
    crmId?: string;
    /**
     *  Currency that the customer is billed in. See [a currency value defined in the Zuora Ui admin settings](https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Customize_Currencies)
     */
    currency: string;
    /**
     * Name of the account's customer service representative, if applicable.
     *
     * @remarks
     *
     * **Character limit**: 50
     *
     *
     * **Values**: a string of 50 characters or fewer
     */
    customerServiceRepName?: string;
    /**
     * Value of the Customer Type field for the corresponding customer account in NetSuite. The Customer Type field is used when the customer account is created in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    customerTypeNS?: SubscribeRequestAccountCustomerTypeNSEnum;
    /**
     * ID of the default payment method for the account. This field is only required if the `AutoPay` field is set to `true`.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     *
     * **Values**: A valid ID for an existing payment method. This field does not support external payment methods.
     */
    defaultPaymentMethodId?: string;
    /**
     * Value of the Department field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    departmentNS?: string;
    /**
     * Internal identifier of an existing account. Only set this field if you want to assign the subscription to an existing account.
     */
    id?: string;
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
     * Indicates if the customer wants to receive invoices through email.
     *
     * @remarks
     * **Character limit**: 5
     *
     *
     * **Values**: `true`, `false` (default if left null)
     */
    invoiceDeliveryPrefsEmail?: boolean;
    /**
     * Indicates if the customer wants to receive printed invoices, such as through postal mail.
     *
     * @remarks
     *
     * **Character limit**: 5
     *
     *
     * **Values**: `true`, `false` (default if left null)
     */
    invoiceDeliveryPrefsPrint?: boolean;
    /**
     * The ID of the invoice template. Each customer account can use a specific invoice template for invoice generation.
     *
     * @remarks
     *
     * **Character limit**: 32
     *
     *
     * **Values**: a[ valid template ID configured in Z-Billing Settings](https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Manage_Invoice_Rules_and_Templates) To find the ID of your current invoice template: In Zuora, navigate to **Settings > Z-Billing > Manage Invoice Rules and Templates** and click **Show Id **next to the template you want to use.
     *
     *
     *
     */
    invoiceTemplateId?: string;
    /**
     *  The date when the previous invoice was generated for the account. The field value is null if no invoice has ever been generated for the account.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     *
     *
     * **Values**: automatically generated
     */
    lastInvoiceDate?: Date;
    /**
     * Value of the Location field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    locationNS?: string;
    /**
     * Name of the account as displayed in the Zuora UI.
     *
     * @remarks
     *
     * **Character limit**: 255
     *
     *
     * **Values**: a string of 255 characters or fewer
     */
    name: string;
    /**
     *  Comments about the account.
     *
     * @remarks
     *
     * **Character limit**: 65,535
     *
     *
     * **Values**: a string of 65,535 characters
     */
    notes?: string;
    /**
     * Identifier of the parent customer account for this Account object. Use this field if you have customer hierarchy enabled.
     *
     * @remarks
     *
     * **Character limit**: 32
     *
     *
     * **Values**: a valid account ID
     */
    parentId?: string;
    /**
     * Gateway used for processing electronic payments and refunds. This field is only required if there is no default payment gateway is defined in the tenant.
     *
     * @remarks
     *
     * **Character limit**: 40
     *
     *
     * **Values**: one of the following:
     *
     * - a valid configured gateway name
     * - Null to inherit the default value set in Z-Payment Settings
     *
     */
    paymentGateway?: string;
    /**
     * Indicates when the customer pays for subscriptions.
     *
     * @remarks
     *
     * **Character limit**: 100
     *
     *
     * **Values**: [a valid, active payment term defined in the web-based UI administrative settings](https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Define_Payment_Terms)
     */
    paymentTerm?: string;
    /**
     * The number of the purchase order associated with this account. Purchase order information generally comes from customers.
     *
     * @remarks
     *
     * **Character limit**: 100
     *
     *
     * **Values**: a string of 100 characters or fewer
     */
    purchaseOrderNumber?: string;
    /**
     * The name of the sales representative associated with this account, if applicable.
     *
     * @remarks
     *
     * **Character limit**: 50
     *
     *
     * **Values**: a string of 50 characters or fewer
     */
    salesRepName?: string;
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
    synctoNetSuiteNS?: SubscribeRequestAccountSynctoNetSuiteNSEnum;
    /**
     *  Unique code that identifies a company account in Avalara. Use this field to calculate taxes based on origin and sold-to addresses in Avalara.
     *
     * @remarks
     * This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     *
     *
     * **Character limit**: 50
     *
     *
     * **Values**: a valid company code
     */
    taxCompanyCode?: string;
    /**
     * ID of your customer's tax exemption certificate.
     *
     * @remarks
     *
     * **Character limit**: 32
     *
     *
     * **Values**: a string of 32 characters or fewer
     */
    taxExemptCertificateID?: string;
    /**
     * Type of the tax exemption certificate that your customer holds.
     *
     * @remarks
     * **Character limit**: 32
     *
     *
     * **Values**: a string of 32 characters or fewer
     */
    taxExemptCertificateType?: string;
    /**
     * Description of the tax exemption certificate that your customer holds.
     *
     * @remarks
     *
     * **Character limit**: 500
     *
     *
     * **Values**: a string of 500 characters or fewer
     */
    taxExemptDescription?: string;
    /**
     * Date when the the customer's tax exemption starts.
     *
     * @remarks
     *
     * **Character limit**: 29 **Version notes**: requires Z-Tax
     */
    taxExemptEffectiveDate?: Date;
    /**
     * Date when the customer's tax exemption certificate expires
     *
     * @remarks
     * **Character limit**: 29 **Version notes**: requires Z-Tax
     */
    taxExemptExpirationDate?: Date;
    /**
     * Indicates the jurisdiction in which the customer's tax exemption certificate was issued.
     *
     * @remarks
     *
     * **Character limit**: 32
     *
     *
     * **Values**: a string of 32 characters or fewer
     */
    taxExemptIssuingJurisdiction?: string;
    /**
     *  Status of the account's tax exemption. This field is only required if you use Zuora Tax. This field is not available if you do not use Zuora Tax.
     *
     * @remarks
     *
     *
     * **Character limit**: 19
     *
     *
     * **Values**: one of the following:
     *
     * - `Yes`
     * - `No`
     * - `PendingVerification`
     *
     */
    taxExemptStatus?: string;
    /**
     * Total balance of the account's invoices.
     *
     * @remarks
     *
     * **Character limit**: 16
     *
     *
     * **Values**: a valid currency value
     */
    totalInvoiceBalance?: number;
    /**
     *  EU Value Added Tax ID.
     *
     * @remarks
     * This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     *
     *
     * **Character limit**: 25
     *
     *
     * **Values**: a valid Value Added Tax ID
     */
    vatId?: string;
}
