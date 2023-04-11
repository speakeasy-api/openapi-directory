import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether to automatically post the billing documents after the draft billing documents are generated.
 *
 * @remarks
 *
 * If an error occurs during posting billing documents, the draft billing documents are not generated too.
 *
 */
export declare enum PostGenerateBillingDocumentTypeAutoPostEnum {
    True = "true",
    False = "false"
}
/**
 * Whether to automatically renew the subscriptions with **Auto Renew** set to **Yes**.
 *
 * @remarks
 *
 */
export declare enum PostGenerateBillingDocumentTypeAutoRenewEnum {
    True = "true",
    False = "false"
}
export declare class PostGenerateBillingDocumentType extends SpeakeasyBase {
    /**
     * Whether to automatically post the billing documents after the draft billing documents are generated.
     *
     * @remarks
     *
     * If an error occurs during posting billing documents, the draft billing documents are not generated too.
     *
     */
    autoPost?: PostGenerateBillingDocumentTypeAutoPostEnum;
    /**
     * Whether to automatically renew the subscriptions with **Auto Renew** set to **Yes**.
     *
     * @remarks
     *
     */
    autoRenew?: PostGenerateBillingDocumentTypeAutoRenewEnum;
    /**
     * The types of the charges to be excluded from the generation of billing documents. The field values are case insensitive. Supported values include `onetime`, `recurring`, and `usage`.
     *
     * @remarks
     *
     */
    chargeTypeToExclude?: string[];
    /**
     * The date on which to generate the billing documents, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    effectiveDate?: Date;
    /**
     * The IDs of the subscriptions that you want to create the billing documents for.
     *
     * @remarks
     *
     */
    subscriptionIds?: string[];
    /**
     * The date used to determine which charges are to be billed, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    targetDate?: Date;
}
