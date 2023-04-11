import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Value of the Customer Type field for the corresponding customer account in NetSuite. The Customer Type field is used when the customer account is created in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum GETAccountTypeBasicInfoCustomerTypeNSEnum {
    Company = "Company",
    Individual = "Individual"
}
/**
 * Specifies whether the account should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum GETAccountTypeBasicInfoSynctoNetSuiteNSEnum {
    Yes = "Yes",
    No = "No"
}
/**
 * Container for custom fields of an Account object.
 *
 * @remarks
 *
 */
export declare class GETAccountTypeBasicInfo extends SpeakeasyBase {
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
    customerTypeNS?: GETAccountTypeBasicInfoCustomerTypeNSEnum;
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
    synctoNetSuiteNS?: GETAccountTypeBasicInfoSynctoNetSuiteNSEnum;
    /**
     * Account number.
     *
     * @remarks
     *
     */
    accountNumber?: string;
    /**
     * The alias name given to a batch. A string of 50 characters or less.
     *
     * @remarks
     *
     */
    batch?: string;
    /**
     * ID of a communication profile.
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
     * A currency as defined in Billing Settings in the Zuora UI.
     *
     * @remarks
     *
     */
    currency?: string;
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
     * Account ID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Invoice template ID, configured in Billing Settings in the Zuora UI.
     *
     * @remarks
     *
     */
    invoiceTemplateId?: string;
    /**
     * Account name.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * Notes associated with the account, up to 65,535 characters.
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
     * The name of the sales representative associated with this account, if applicable. Maximum of 50 characters.
     */
    salesRep?: string;
    /**
     * The ID of the billing document sequence set that is assigned to the customer account.
     *
     * @remarks
     *
     */
    sequenceSetId?: string;
    /**
     * Account status; possible values are: `Active`, `Draft`, `Canceled`.
     *
     * @remarks
     *
     */
    status?: string;
    tags?: string;
}
