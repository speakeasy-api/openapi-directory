import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Value of the Customer Type field for the corresponding customer account in NetSuite. The Customer Type field is used when the customer account is created in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum ProxyModifyAccountCustomerTypeNSEnum {
    Company = "Company",
    Individual = "Individual"
}
/**
 * Status of the account in the system.
 *
 * @remarks
 *
 * Follow the following rules to update the status of accounts:
 * - Include contact IDs in the `BillToId` and `SoldToId` fields when you change the `Status` field value to `Active`.
 * - Before changing the status of an account to `Canceled`, cancel all subscriptions associated with this account. You cannot cancel an account that has active subscriptions.
 * - You can update a Draft account to Active, assuming the Bill To/Sold To Contacts are assigned.
 * - You can update a Canceled account to the Active status at any time.
 * - You cannot update the Active or Cancelled status of an account to `Draft`.
 *
 */
export declare enum ProxyModifyAccountStatusEnum {
    Draft = "Draft",
    Active = "Active",
    Canceled = "Canceled"
}
/**
 * Specifies whether the account should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum ProxyModifyAccountSynctoNetSuiteNSEnum {
    Yes = "Yes",
    No = "No"
}
/**
 * Container for custom fields of an Account object.
 *
 * @remarks
 *
 */
export declare class ProxyModifyAccount extends SpeakeasyBase {
    /**
     * Unique account number assigned to the account. You can modify the account number of a customer account only if the account has no subscriptions or draft subscriptions only. Otherwise, the account number cannot be modified. **Character limit**: 50 **Values**: one of the following:
     *
     * @remarks
     *
     * - null to auto-generate
     * - a string of 50 characters or fewer that doesn't begin with the default account number prefix
     *
     */
    accountNumber?: string;
    /**
     * List of additional email addresses to receive emailed invoices. **Character limit**: 120 **Values**: comma-separated list of email addresses
     */
    additionalEmailAddresses?: string;
    /**
     *  Indicates if associated invoices can be edited.
     *
     * @remarks
     * **Character limit**: 5 **Values**: `true`, `false` (default if left null)
     */
    allowInvoiceEdit?: boolean;
    /**
     *  Indicates if future payments are automatically collected when they're due during a Payment Run.
     *
     * @remarks
     * **Character limit**: 5 **Values**: `true`, `false` (default)
     */
    autoPay?: boolean;
    /**
     *  Organizes your customer accounts into groups to optimize your billing and payment operations. Required if you use the Subscribe call.
     *
     * @remarks
     * **Character limit**: 20 **Values**:any system-defined batch (`Batch1` - `Batch50 `or by name).
     */
    batch?: string;
    /**
     * Billing cycle day setting option. **Character limit**: 9 **Values**: `AutoSet`, `ManualSet`
     */
    bcdSettingOption?: string;
    /**
     * Billing cycle day (BCD) on which bill runs generate invoices for the account. **Character limit**: 2 **Values**: any activated system-defined bill cycle day (`1` - `31`)
     */
    billCycleDay?: number;
    /**
     * ID of the person to bill for the account. **Character limit**: 32 **Values**: a valid contact ID for the account
     */
    billToId?: string;
    /**
     * Value of the Class field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    classNS?: string;
    /**
     * CRM account ID for the account. A CRM is a customer relationship management system, such as Salesforce.com. **Character limit**: 100 **Values**: a string of 100 characters or fewer
     */
    crmId?: string;
    /**
     * Currency that the customer is billed in.
     *
     * @remarks
     *
     * You can update this field only when an account is in Draft status. After the account is activated, you cannot update this field.
     *
     */
    currency?: string;
    /**
     * Name of the account's customer service representative, if applicable. **Character limit**: 50 **Values**: a string of 50 characters or fewer
     */
    customerServiceRepName?: string;
    /**
     * Value of the Customer Type field for the corresponding customer account in NetSuite. The Customer Type field is used when the customer account is created in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    customerTypeNS?: ProxyModifyAccountCustomerTypeNSEnum;
    /**
     * ID of the default payment method for the account. This field is required if the AutoPay field is set to `true`. **Character limit**: 32 **Values**: a valid ID for an existing payment method
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
     * Indicates if the customer wants to receive invoices through email.  **Character limit**: 5 **Values**: `true`, `false` (default if left null)
     */
    invoiceDeliveryPrefsEmail?: boolean;
    /**
     * Indicates if the customer wants to receive printed invoices, such as through postal mail. **Character limit**: 5 **Values**: `true`, `false` (default if left null)
     */
    invoiceDeliveryPrefsPrint?: boolean;
    /**
     * The ID of the invoice template. Each customer account can use a specific invoice template for invoice generation. **Character limit**: 32 **Values**: a valid template ID configured in Zuora Billing Settings
     */
    invoiceTemplateId?: string;
    /**
     * Value of the Location field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    locationNS?: string;
    /**
     * Name of the account as displayed in the Zuora UI. **Character limit**: 255 **Values**: a string of 255 characters or fewer
     */
    name?: string;
    /**
     *  Comments about the account. **Character limit**: 65,535 **Values**: a string of 65,535 characters
     */
    notes?: string;
    /**
     * Identifier of the parent customer account for this Account object. Use this field if you have customer hierarchy enabled. **Character limit**: 32 **Values**: a valid account ID
     */
    parentId?: string;
    /**
     * Gateway used for processing electronic payments and refunds. **Character limit**: 40 **Values**: one of the following:
     *
     * @remarks
     *
     * - a valid configured gateway name
     * - Null to inherit the default value set in Zuora Payment Settings
     *
     */
    paymentGateway?: string;
    /**
     * Indicates when the customer pays for subscriptions. **Character limit**: 100 **Values**: a valid, active payment term defined in the web-based UI administrative settings
     */
    paymentTerm?: string;
    /**
     * The number of the purchase order associated with this account. Purchase order information generally comes from customers. **Character limit**: 100 **Values**: a string of 100 characters or fewer
     */
    purchaseOrderNumber?: string;
    /**
     * The name of the sales representative associated with this account, if applicable. **Character limit**: 50 **Values**: a string of 50 characters or fewer
     */
    salesRepName?: string;
    /**
     * ID of the person who bought the subscription associated with the account. **Character limit**: 32 **Values**: a valid contact ID for the account
     */
    soldToId?: string;
    /**
     * Status of the account in the system.
     *
     * @remarks
     *
     * Follow the following rules to update the status of accounts:
     * - Include contact IDs in the `BillToId` and `SoldToId` fields when you change the `Status` field value to `Active`.
     * - Before changing the status of an account to `Canceled`, cancel all subscriptions associated with this account. You cannot cancel an account that has active subscriptions.
     * - You can update a Draft account to Active, assuming the Bill To/Sold To Contacts are assigned.
     * - You can update a Canceled account to the Active status at any time.
     * - You cannot update the Active or Cancelled status of an account to `Draft`.
     *
     */
    status?: ProxyModifyAccountStatusEnum;
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
    synctoNetSuiteNS?: ProxyModifyAccountSynctoNetSuiteNSEnum;
    /**
     *  Unique code that identifies a company account in Avalara. Use this field to calculate taxes based on origin and sold-to addresses in Avalara.
     *
     * @remarks
     * This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * **Character limit**: 50 **Values**: a valid company code
     */
    taxCompanyCode?: string;
    /**
     * ID of your customer's tax exemption certificate. **Character limit**: 32 **Values**: a string of 32 characters or fewer
     */
    taxExemptCertificateID?: string;
    /**
     * Type of the tax exemption certificate that your customer holds.  **Character limit**: 32 **Values**: a string of 32 characters or fewer
     */
    taxExemptCertificateType?: string;
    /**
     * Description of the tax exemption certificate that your customer holds. **Character limit**: 500 **Values**: a string of 500 characters or fewer
     */
    taxExemptDescription?: string;
    /**
     * Date when the the customer's tax exemption starts. **Character limit**: 29 **Version notes**: requires Zuora Tax
     */
    taxExemptEffectiveDate?: Date;
    /**
     * Date when the customer's tax exemption certificate expires  **Character limit**: 29 **Version notes**: requires Zuora Tax
     */
    taxExemptExpirationDate?: Date;
    /**
     * Indicates the jurisdiction in which the customer's tax exemption certificate was issued. **Character limit**: 32 **Values**: a string of 32 characters or fewer
     */
    taxExemptIssuingJurisdiction?: string;
    /**
     *  Status of the account's tax exemption. Required if you use Zuora Tax.
     *
     * @remarks
     * **Character limit**: 19 **Values**: one of the following:
     *
     * - `Yes`
     * - `No`
     * - `PendingVerification`
     *
     */
    taxExemptStatus?: string;
    /**
     *  EU Value Added Tax ID.
     *
     * @remarks
     * This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * **Character limit**: 25 **Values**: a valid Value Added Tax ID
     */
    vatId?: string;
    /**
     * Associates the account with a specified communication profile. **Character limit**: 32 **Values**: a valid communication profile ID
     */
    communicationProfileId?: string;
}
