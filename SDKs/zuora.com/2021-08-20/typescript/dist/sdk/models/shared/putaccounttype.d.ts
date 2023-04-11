import { SpeakeasyBase } from "../../../internal/utils";
import { PUTAccountTypeBillToContact } from "./putaccounttypebilltocontact";
import { PUTAccountTypeSoldToContact } from "./putaccounttypesoldtocontact";
/**
 * Value of the Customer Type field for the corresponding customer account in NetSuite. The Customer Type field is used when the customer account is created in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum PUTAccountTypeCustomerTypeNSEnum {
    Company = "Company",
    Individual = "Individual"
}
/**
 * Specifies whether the account should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum PUTAccountTypeSynctoNetSuiteNSEnum {
    Yes = "Yes",
    No = "No"
}
/**
 * Container for tax exempt information, used to establish the tax exempt status of a customer account.
 *
 * @remarks
 *
 */
export declare class PUTAccountTypeTaxInfo extends SpeakeasyBase {
    /**
     * EU Value Added Tax ID.
     *
     * @remarks
     *
     * **Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).
     *
     */
    vatId?: string;
    /**
     * Unique code that identifies a company account in Avalara. Use this field to calculate taxes based on origin and sold-to addresses in Avalara.
     *
     * @remarks
     *
     * **Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).
     *
     */
    companyCode?: string;
    /**
     * ID of the customer tax exemption certificate. Requires Zuora Tax.
     *
     * @remarks
     *
     */
    exemptCertificateId?: string;
    /**
     * Type of tax exemption certificate that the customer holds. Requires Zuora Tax.
     *
     * @remarks
     *
     */
    exemptCertificateType?: string;
    /**
     * Description of the tax exemption certificate that the customer holds. Requires Zuora Tax.
     *
     * @remarks
     *
     */
    exemptDescription?: string;
    /**
     * Date when the customer tax exemption starts. Requires Zuora Tax.
     *
     * @remarks
     *
     * Format: `yyyy-mm-dd`. Defaults to the current date.
     *
     */
    exemptEffectiveDate?: Date;
    /**
     * A unique entity use code to apply exemptions in Avalara AvaTax.
     *
     * @remarks
     *
     * This account-level field is required only when you choose Avalara as your tax engine. See [Exempt Transactions](https://developer.avalara.com/avatax/handling-tax-exempt-customers/)for more details.
     *
     */
    exemptEntityUseCode?: string;
    /**
     * Date when the customer tax exemption expires. Requires Zuora Tax.
     *
     * @remarks
     *
     * Format: `yyyy-mm-dd`. Defaults to the current date.
     *
     */
    exemptExpirationDate?: Date;
    /**
     * Jurisdiction in which the customer tax exemption certificate was issued.
     *
     * @remarks
     *
     */
    exemptIssuingJurisdiction?: string;
    /**
     * Status of the account tax exemption. Requires Zuora Tax.
     *
     * @remarks
     *
     * Required if you use Zuora Tax. This field is unavailable if Zuora Tax is not used.
     *
     * Values: `Yes`, `No`, `pendingVerification`.
     *
     */
    exemptStatus?: string;
}
/**
 * Container for custom fields of an Account object.
 *
 * @remarks
 *
 */
export declare class PUTAccountType extends SpeakeasyBase {
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
    customerTypeNS?: PUTAccountTypeCustomerTypeNSEnum;
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
    synctoNetSuiteNS?: PUTAccountTypeSynctoNetSuiteNSEnum;
    /**
     * A list of additional email addresses to receive emailed invoices. Use a comma to separate each email address.
     *
     * @remarks
     *
     * **Note:** Invoices are emailed to the email addresses specified in this field only when the `invoiceDeliveryPrefsEmail` field is `true`.
     *
     */
    additionalEmailAddresses?: string[];
    /**
     * Whether future payments are to be automatically billed when they are due.
     *
     * @remarks
     *
     */
    autoPay?: boolean;
    /**
     * The alias name given to a batch. A string of 50 characters or less.
     *
     * @remarks
     *
     */
    batch?: string;
    /**
     * Container for bill-to contact information for this account.
     *
     * @remarks
     *
     */
    billToContact?: PUTAccountTypeBillToContact;
    /**
     * The ID of a communication profile.
     *
     * @remarks
     *
     */
    communicationProfileId?: string;
    /**
     * **Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * @remarks
     *
     * The unique ID of the credit memo template, configured in **Billing Settings** > **Manage Billing Document Configuration** through the Zuora UI. For example, 2c92c08a6246fdf101626b1b3fe0144b.
     *
     */
    creditMemoTemplateId?: string;
    /**
     * CRM account ID for the account, up to 100 characters.
     *
     * @remarks
     *
     */
    crmId?: string;
    /**
     * **Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * @remarks
     *
     * The unique ID of the debit memo template, configured in **Billing Settings** > **Manage Billing Document Configuration** through the Zuora UI. For example, 2c92c08d62470a8501626b19d24f19e2.
     *
     */
    debitMemoTemplateId?: string;
    /**
     * Whether the customer wants to receive invoices through email.
     *
     * @remarks
     *
     * The default value is `false`.
     *
     */
    invoiceDeliveryPrefsEmail?: boolean;
    /**
     * Whether the customer wants to receive printed invoices, such as through postal mail.
     *
     * @remarks
     *
     * The default value is `false`.
     *
     */
    invoiceDeliveryPrefsPrint?: boolean;
    /**
     * Invoice template ID, configured in Billing Settings in the Zuora UI.
     *
     * @remarks
     *
     */
    invoiceTemplateId?: string;
    /**
     * Account name, up to 255 characters.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * A string of up to 65,535 characters.
     *
     * @remarks
     *
     */
    notes?: string;
    /**
     * Identifier of the parent customer account for this Account object. The length is 32 characters. Use this field if you have customer hierarchy enabled.
     */
    parentId?: string;
    /**
     * The name of the payment gateway instance. If null or left unassigned, the Account will use the Default Gateway.
     *
     * @remarks
     *
     */
    paymentGateway?: string;
    /**
     * The name of the sales representative associated with this account, if applicable. Maximum of 50 characters.
     */
    salesRep?: string;
    /**
     * The ID of the billing document sequence set to assign to the customer account.
     *
     * @remarks
     *
     * The billing documents to generate for this account will adopt the prefix and starting document number configured in the sequence set.
     *
     * If a customer account has no assigned billing document sequence set, billing documents generated for this account adopt the prefix and starting document number from the default sequence set.
     *
     */
    sequenceSetId?: string;
    /**
     * Container for optional sold-to contact.
     *
     * @remarks
     *
     */
    soldToContact?: PUTAccountTypeSoldToContact;
    tagging?: string;
    /**
     * Container for tax exempt information, used to establish the tax exempt status of a customer account.
     *
     * @remarks
     *
     */
    taxInfo?: PUTAccountTypeTaxInfo;
}
