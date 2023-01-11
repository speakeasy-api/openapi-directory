import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for billing and payment information for the account.
 *
**/
export declare class GetAccountTypeBillingAndPayment extends SpeakeasyBase {
    additionalEmailAddresses?: string[];
    billCycleDay?: string;
    currency?: string;
    invoiceDeliveryPrefsEmail?: boolean;
    invoiceDeliveryPrefsPrint?: boolean;
    paymentGateway?: string;
    paymentTerm?: string;
}
/**
 * Container for account metrics.
 *
**/
export declare class GetAccountTypeMetrics extends SpeakeasyBase {
    balance?: string;
    contractedMrr?: string;
    creditBalance?: string;
    totalDebitMemoBalance?: string;
    totalInvoiceBalance?: string;
    unappliedCreditMemoAmount?: string;
    unappliedPaymentAmount?: string;
}
/**
 * Container for tax exempt information, used to establish the tax exempt status of a customer account.
 *
**/
export declare class GetAccountTypeTaxInfo extends SpeakeasyBase {
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
export declare class GetAccountType extends SpeakeasyBase {
    basicInfo?: Record<string, any>;
    billToContact?: Record<string, any>;
    billingAndPayment?: GetAccountTypeBillingAndPayment;
    metrics?: GetAccountTypeMetrics;
    soldToContact?: Record<string, any>;
    success?: boolean;
    taxInfo?: GetAccountTypeTaxInfo;
}
