import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetAccountSummaryInvoiceType } from "./getaccountsummaryinvoicetype";
import { GetAccountSummaryPaymentType } from "./getaccountsummarypaymenttype";
import { GetAccountSummaryUsageType } from "./getaccountsummaryusagetype";



// GetAccountSummaryTypeTaxInfo
/** 
 * Container for tax exempt information, used to establish the tax exempt status of a customer account.
 * 
**/
export class GetAccountSummaryTypeTaxInfo extends SpeakeasyBase {
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


export class GetAccountSummaryType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicInfo" })
  basicInfo?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=billToContact" })
  billToContact?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=invoices", elemType: GetAccountSummaryInvoiceType })
  invoices?: GetAccountSummaryInvoiceType[];

  @SpeakeasyMetadata({ data: "json, name=payments", elemType: GetAccountSummaryPaymentType })
  payments?: GetAccountSummaryPaymentType[];

  @SpeakeasyMetadata({ data: "json, name=soldToContact" })
  soldToContact?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=subscriptions" })
  subscriptions?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=taxInfo" })
  taxInfo?: GetAccountSummaryTypeTaxInfo;

  @SpeakeasyMetadata({ data: "json, name=usage", elemType: GetAccountSummaryUsageType })
  usage?: GetAccountSummaryUsageType[];
}
