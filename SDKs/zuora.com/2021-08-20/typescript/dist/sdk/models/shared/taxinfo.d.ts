import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TaxInfoExemptStatusEnum {
    No = "No",
    Yes = "Yes",
    PendingVerification = "PendingVerification"
}
/**
 * Information about the tax exempt status of a customer account.
 *
**/
export declare class TaxInfo extends SpeakeasyBase {
    vatId?: string;
    companyCode?: string;
    exemptCertificateId?: string;
    exemptCertificateType?: string;
    exemptDescription?: string;
    exemptEffectiveDate?: Date;
    exemptExpirationDate?: Date;
    exemptIssuingJurisdiction?: string;
    exemptStatus?: TaxInfoExemptStatusEnum;
}
