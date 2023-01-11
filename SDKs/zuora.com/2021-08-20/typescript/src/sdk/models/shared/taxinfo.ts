import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TaxInfoExemptStatusEnum {
    No = "No",
    Yes = "Yes",
    PendingVerification = "PendingVerification"
}


// TaxInfo
/** 
 * Information about the tax exempt status of a customer account.
 * 
**/
export class TaxInfo extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=exemptExpirationDate" })
  exemptExpirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=exemptIssuingJurisdiction" })
  exemptIssuingJurisdiction?: string;

  @SpeakeasyMetadata({ data: "json, name=exemptStatus" })
  exemptStatus?: TaxInfoExemptStatusEnum;
}
