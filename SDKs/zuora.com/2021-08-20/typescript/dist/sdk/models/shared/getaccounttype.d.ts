import { SpeakeasyBase } from "../../../internal/utils";
import { GETAccountTypeBasicInfo } from "./getaccounttypebasicinfo";
import { GETAccountTypeBillToContact } from "./getaccounttypebilltocontact";
import { GETAccountTypeSoldToContact } from "./getaccounttypesoldtocontact";
/**
 * Container for billing and payment information for the account.
 *
 * @remarks
 *
 */
export declare class GETAccountTypeBillingAndPayment extends SpeakeasyBase {
    /**
     * A list of additional email addresses to receive emailed invoices.
     *
     * @remarks
     *
     */
    additionalEmailAddresses?: string[];
    /**
     * Billing cycle day (BCD), the day of the month when a bill run generates invoices for the account.
     *
     * @remarks
     *
     */
    billCycleDay?: string;
    /**
     * A currency defined in the web-based UI administrative settings.
     *
     * @remarks
     *
     */
    currency?: string;
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
     * The name of the payment gateway instance. If null or left unassigned, the Account will use the Default Gateway.
     *
     * @remarks
     *
     */
    paymentGateway?: string;
    /**
     * A payment-terms indicator defined in the web-based UI administrative settings, e.g., "Net 30".
     *
     * @remarks
     *
     */
    paymentTerm?: string;
}
/**
 * Container for account metrics.
 *
 * @remarks
 *
 */
export declare class GETAccountTypeMetrics extends SpeakeasyBase {
    /**
     * The customer's total invoice balance minus credit balance.
     *
     * @remarks
     *
     */
    balance?: string;
    /**
     * Future expected MRR that accounts for future upgrades, downgrades, upsells and cancellations.
     *
     * @remarks
     *
     */
    contractedMrr?: string;
    /**
     * Current credit balance.
     *
     * @remarks
     *
     */
    creditBalance?: string;
    /**
     * **Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * @remarks
     *
     * Total balance of all posted debit memos.
     *
     */
    totalDebitMemoBalance?: string;
    /**
     * Total balance of all posted invoices.
     *
     * @remarks
     *
     */
    totalInvoiceBalance?: string;
    /**
     * **Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * @remarks
     *
     * Total unapplied amount of all posted credit memos.
     *
     */
    unappliedCreditMemoAmount?: string;
    /**
     * **Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * @remarks
     *
     * Total unapplied amount of all posted payments.
     *
     */
    unappliedPaymentAmount?: string;
}
/**
 * Container for tax exempt information, used to establish the tax exempt status of a customer account.
 *
 * @remarks
 *
 */
export declare class GETAccountTypeTaxInfo extends SpeakeasyBase {
    /**
     * EU Value Added Tax ID.
     *
     * @remarks
     *
     */
    vatId?: string;
    /**
     * Unique code that identifies a company account in Avalara.
     *
     * @remarks
     *
     */
    companyCode?: string;
    /**
     * ID of the customer tax exemption certificate.
     *
     * @remarks
     *
     */
    exemptCertificateId?: string;
    /**
     * Type of tax exemption certificate that the customer holds.
     *
     * @remarks
     *
     */
    exemptCertificateType?: string;
    /**
     * Description of the tax exemption certificate that the customer holds.
     *
     * @remarks
     *
     */
    exemptDescription?: string;
    /**
     * Date when the customer tax exemption starts.
     *
     * @remarks
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
     * Date when the customer tax exemption expires.
     *
     * @remarks
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
     * Status of the account tax exemption.
     *
     * @remarks
     *
     */
    exemptStatus?: string;
}
export declare class GETAccountType extends SpeakeasyBase {
    /**
     * Container for basic information about the account.
     *
     * @remarks
     *
     */
    basicInfo?: GETAccountTypeBasicInfo;
    /**
     * Container for bill-to contact information.
     *
     * @remarks
     *
     */
    billToContact?: GETAccountTypeBillToContact;
    /**
     * Container for billing and payment information for the account.
     *
     * @remarks
     *
     */
    billingAndPayment?: GETAccountTypeBillingAndPayment;
    /**
     * Container for account metrics.
     *
     * @remarks
     *
     */
    metrics?: GETAccountTypeMetrics;
    /**
     * Container for sold-to contact information. Uses the same field structure as billToContact.
     *
     * @remarks
     *
     */
    soldToContact?: GETAccountTypeSoldToContact;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * Container for tax exempt information, used to establish the tax exempt status of a customer account.
     *
     * @remarks
     *
     */
    taxInfo?: GETAccountTypeTaxInfo;
}
