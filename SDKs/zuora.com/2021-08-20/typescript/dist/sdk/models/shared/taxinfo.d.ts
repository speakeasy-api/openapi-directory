import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the account tax exemption. Applicable if you use Zuora Tax or Connect tax engines. Required if you use Zuora Tax.
 *
 * @remarks
 *
 */
export declare enum TaxInfoExemptStatusEnum {
    No = "No",
    Yes = "Yes",
    PendingVerification = "PendingVerification"
}
/**
 * Information about the tax exempt status of a customer account.
 *
 * @remarks
 *
 */
export declare class TaxInfo extends SpeakeasyBase {
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
     * ID of the customer tax exemption certificate. Applicable if you use Zuora Tax or Connect tax engines.
     *
     * @remarks
     *
     */
    exemptCertificateId?: string;
    /**
     * Type of tax exemption certificate that the customer holds. Applicable if you use Zuora Tax or Connect tax engines.
     *
     * @remarks
     *
     */
    exemptCertificateType?: string;
    /**
     * Description of the tax exemption certificate that the customer holds. Applicable if you use Zuora Tax or Connect tax engines.
     *
     * @remarks
     *
     */
    exemptDescription?: string;
    /**
     * Date when the customer tax exemption starts, in YYYY-MM-DD format. Applicable if you use Zuora Tax or Connect tax engines.
     *
     * @remarks
     *
     */
    exemptEffectiveDate?: Date;
    /**
     * Date when the customer tax exemption expires, in YYYY-MM-DD format. Applicable if you use Zuora Tax or Connect tax engines.
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
     * Status of the account tax exemption. Applicable if you use Zuora Tax or Connect tax engines. Required if you use Zuora Tax.
     *
     * @remarks
     *
     */
    exemptStatus?: TaxInfoExemptStatusEnum;
}
