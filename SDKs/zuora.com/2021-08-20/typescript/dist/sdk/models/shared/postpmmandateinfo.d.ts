import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether the mandate is an existing mandate.
 *
 * @remarks
 *
 */
export declare enum POSTPMMandateInfoExistingMandateStatusEnum {
    True = "true",
    False = "false"
}
/**
 * Indicates whether the mandate is received from the gateway
 *
 * @remarks
 *
 */
export declare enum POSTPMMandateInfoMandateReceivedStatusEnum {
    True = "true",
    False = "false"
}
export declare enum POSTPMMandateInfoMitConsentAgreementSrcEnum {
    External = "External"
}
/**
 * Specifies how Zuora activates the stored credential profile. Only applicable if you set the `status` field to `Active`.
 *
 * @remarks
 *
 * * `Activate` (default) - Use this value if you are creating the stored credential profile after receiving the customer's consent.
 *
 *   Zuora will create the stored credential profile then send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile. If the CIT succeeds, the status of the stored credential profile will be `Active`. If the CIT does not succeed, Zuora will not create a stored credential profile.
 *
 *   If the payment gateway does not support the stored credential transaction framework, the status of the stored credential profile will be `Agreed`.
 *
 *
 * * `Persist` - Use this value if the stored credential profile represents a stored credential profile in an external system. The status of the payment method's stored credential profile will be `Active`.
 *
 */
export declare enum POSTPMMandateInfoMitProfileActionEnum {
    Activate = "Activate",
    Persist = "Persist"
}
/**
 * The mandate information for the Credit Card, ACH, or Bank Transfer payment method.
 *
 * @remarks
 *
 * The following mandate fields are specific to the ACH and Bank Transfer payment methods:
 * * `mandateId`
 * * `mandateReceivedStatus`
 * * `existingMandateStatus`
 * * `mandateCreationDate`
 * * `mandateUpdateDate`
 * * `mandateStatus`
 * * `mandateReason`
 *
 * The following mandate fields are specific to the Credit Card payment method:
 * * `mitTransactionId`
 * * `mitProfileAgreedOn`
 * * `mitConsentAgreementRef`
 * * `mitConsentAgreementSrc`
 * * `mitProfileType`
 * * `mitProfileAction`
 *
 */
export declare class POSTPMMandateInfo extends SpeakeasyBase {
    /**
     * Indicates whether the mandate is an existing mandate.
     *
     * @remarks
     *
     */
    existingMandateStatus?: POSTPMMandateInfoExistingMandateStatusEnum;
    /**
     * The date on which the mandate was created.
     *
     * @remarks
     *
     */
    mandateCreationDate?: Date;
    /**
     * The mandate ID.
     *
     * @remarks
     *
     */
    mandateId?: string;
    /**
     * The reason of the mandate from the gateway side.
     *
     * @remarks
     *
     */
    mandateReason?: string;
    /**
     * Indicates whether the mandate is received from the gateway
     *
     * @remarks
     *
     */
    mandateReceivedStatus?: POSTPMMandateInfoMandateReceivedStatusEnum;
    /**
     * The status of the mandate from the gateway side.
     *
     * @remarks
     *
     */
    mandateStatus?: string;
    /**
     * The date on which the mandate was updated.
     *
     * @remarks
     *
     */
    mandateUpdateDate?: Date;
    /**
     * Reference for the consent agreement that you have established with the customer.
     *
     * @remarks
     *
     */
    mitConsentAgreementRef?: string;
    mitConsentAgreementSrc?: POSTPMMandateInfoMitConsentAgreementSrcEnum;
    /**
     * Specifies how Zuora activates the stored credential profile. Only applicable if you set the `status` field to `Active`.
     *
     * @remarks
     *
     * * `Activate` (default) - Use this value if you are creating the stored credential profile after receiving the customer's consent.
     *
     *   Zuora will create the stored credential profile then send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile. If the CIT succeeds, the status of the stored credential profile will be `Active`. If the CIT does not succeed, Zuora will not create a stored credential profile.
     *
     *   If the payment gateway does not support the stored credential transaction framework, the status of the stored credential profile will be `Agreed`.
     *
     *
     * * `Persist` - Use this value if the stored credential profile represents a stored credential profile in an external system. The status of the payment method's stored credential profile will be `Active`.
     *
     */
    mitProfileAction?: POSTPMMandateInfoMitProfileActionEnum;
    /**
     * The date on which the stored credential profile is agreed. The date format is `yyyy-mm-dd`.
     *
     * @remarks
     *
     */
    mitProfileAgreedOn?: Date;
    /**
     * Indicates the type of the stored credential profile.
     *
     * @remarks
     *
     */
    mitProfileType?: string;
    /**
     * Specifies the ID of the transaction. Only applicable if you set the `mitProfileAction` field to `Persist`.
     *
     * @remarks
     *
     */
    mitTransactionId?: string;
}
