import { SpeakeasyBase } from "../../../internal/utils";
import { GETAccountSummaryInvoiceType } from "./getaccountsummaryinvoicetype";
import { GETAccountSummaryPaymentType } from "./getaccountsummarypaymenttype";
import { GETAccountSummarySubscriptionType } from "./getaccountsummarysubscriptiontype";
import { GETAccountSummaryTypeBasicInfo } from "./getaccountsummarytypebasicinfo";
import { GETAccountSummaryTypeBillToContact } from "./getaccountsummarytypebilltocontact";
import { GETAccountSummaryTypeSoldToContact } from "./getaccountsummarytypesoldtocontact";
import { GETAccountSummaryUsageType } from "./getaccountsummaryusagetype";
/**
 * Container for tax exempt information, used to establish the tax exempt status of a customer account.
 *
 * @remarks
 *
 */
export declare class GETAccountSummaryTypeTaxInfo extends SpeakeasyBase {
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
export declare class GETAccountSummaryType extends SpeakeasyBase {
    /**
     * Container for basic information about the account.
     *
     * @remarks
     *
     */
    basicInfo?: GETAccountSummaryTypeBasicInfo;
    /**
     * Container for bill-to contact information.
     */
    billToContact?: GETAccountSummaryTypeBillToContact;
    /**
     * Container for invoices. Only returns the last 6 invoices.
     *
     * @remarks
     *
     */
    invoices?: GETAccountSummaryInvoiceType[];
    /**
     * Container for payments. Only returns the last 6 payments.
     *
     * @remarks
     *
     */
    payments?: GETAccountSummaryPaymentType[];
    /**
     * Container for sold-to contact information; uses the same structure as `billToContact`.
     *
     * @remarks
     *
     */
    soldToContact?: GETAccountSummaryTypeSoldToContact;
    /**
     * Container for subscriptions.
     *
     * @remarks
     *
     */
    subscriptions?: GETAccountSummarySubscriptionType[];
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
    taxInfo?: GETAccountSummaryTypeTaxInfo;
    /**
     * Container for usage data. Only returns the last 6 months of usage.
     *
     * @remarks
     *
     * **Note:** If the Active Rating feature is enabled, no usage data is returned in the response body field.
     *
     */
    usage?: GETAccountSummaryUsageType[];
}
