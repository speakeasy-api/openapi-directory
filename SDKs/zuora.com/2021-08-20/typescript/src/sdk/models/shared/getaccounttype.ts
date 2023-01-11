import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetAccountTypeBillingAndPayment
/** 
 * Container for billing and payment information for the account.
 * 
**/
export class GetAccountTypeBillingAndPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalEmailAddresses" })
  additionalEmailAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=billCycleDay" })
  billCycleDay?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceDeliveryPrefsEmail" })
  invoiceDeliveryPrefsEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=invoiceDeliveryPrefsPrint" })
  invoiceDeliveryPrefsPrint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=paymentGateway" })
  paymentGateway?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentTerm" })
  paymentTerm?: string;
}


// GetAccountTypeMetrics
/** 
 * Container for account metrics.
 * 
**/
export class GetAccountTypeMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: string;

  @SpeakeasyMetadata({ data: "json, name=contractedMrr" })
  contractedMrr?: string;

  @SpeakeasyMetadata({ data: "json, name=creditBalance" })
  creditBalance?: string;

  @SpeakeasyMetadata({ data: "json, name=totalDebitMemoBalance" })
  totalDebitMemoBalance?: string;

  @SpeakeasyMetadata({ data: "json, name=totalInvoiceBalance" })
  totalInvoiceBalance?: string;

  @SpeakeasyMetadata({ data: "json, name=unappliedCreditMemoAmount" })
  unappliedCreditMemoAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=unappliedPaymentAmount" })
  unappliedPaymentAmount?: string;
}


// GetAccountTypeTaxInfo
/** 
 * Container for tax exempt information, used to establish the tax exempt status of a customer account.
 * 
**/
export class GetAccountTypeTaxInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VATId" })
  vatId?: string;

  @SpeakeasyMetadata({ data: "json, name=companyCode" })
  companyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=exemptCertificateId" })
  exemptCertificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=exemptCertificateType" })
  exemptCertificateType?: string;

  @SpeakeasyMetadata({ data: "json, name=exemptDescription" })
  exemptDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=exemptEffectiveDate" })
  exemptEffectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=exemptEntityUseCode" })
  exemptEntityUseCode?: string;

  @SpeakeasyMetadata({ data: "json, name=exemptExpirationDate" })
  exemptExpirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=exemptIssuingJurisdiction" })
  exemptIssuingJurisdiction?: string;

  @SpeakeasyMetadata({ data: "json, name=exemptStatus" })
  exemptStatus?: string;
}


export class GetAccountType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicInfo" })
  basicInfo?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=billToContact" })
  billToContact?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=billingAndPayment" })
  billingAndPayment?: GetAccountTypeBillingAndPayment;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: GetAccountTypeMetrics;

  @SpeakeasyMetadata({ data: "json, name=soldToContact" })
  soldToContact?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=taxInfo" })
  taxInfo?: GetAccountTypeTaxInfo;
}
