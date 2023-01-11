import { SpeakeasyBase } from "../../../internal/utils";
import { GetAccountSummaryInvoiceType } from "./getaccountsummaryinvoicetype";
import { GetAccountSummaryPaymentType } from "./getaccountsummarypaymenttype";
import { GetAccountSummaryUsageType } from "./getaccountsummaryusagetype";
/**
 * Container for tax exempt information, used to establish the tax exempt status of a customer account.
 *
**/
export declare class GetAccountSummaryTypeTaxInfo extends SpeakeasyBase {
    vatId?: string;
    companyCode?: string;
    exemptCertificateId?: string;
    exemptCertificateType?: string;
    exemptDescription?: string;
    exemptEffectiveDate?: Date;
    exemptEntityUseCode?: string;
    exemptExpirationDate?: Date;
    exemptIssuingJurisdiction?: string;
    exemptStatus?: string;
}
export declare class GetAccountSummaryType extends SpeakeasyBase {
    basicInfo?: Record<string, any>;
    billToContact?: Record<string, any>;
    invoices?: GetAccountSummaryInvoiceType[];
    payments?: GetAccountSummaryPaymentType[];
    soldToContact?: Record<string, any>;
    subscriptions?: Record<string, any>[];
    success?: boolean;
    taxInfo?: GetAccountSummaryTypeTaxInfo;
    usage?: GetAccountSummaryUsageType[];
}
