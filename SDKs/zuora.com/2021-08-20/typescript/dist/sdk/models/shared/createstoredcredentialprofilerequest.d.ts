import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum CreateStoredCredentialProfileRequestActionEnum {
    Activate = "Activate",
    Persist = "Persist"
}
export declare enum CreateStoredCredentialProfileRequestConsentAgreementSrcEnum {
    External = "External"
}
/**
 * Specifies the status of the stored credential profile.
 *
 * @remarks
 *
 * * `Active` - Use this value if you are creating the stored credential profile after receiving the customer's consent, or if the stored credential profile represents a stored credential profile in an external system.
 *
 *   You can use the `action` field to specify how Zuora activates the stored credential profile.
 *
 *
 * * `Agreed` - Use this value if you are migrating the payment method to the stored credential transaction framework.
 *
 *   In this case, Zuora will not send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile.
 *
 */
export declare enum CreateStoredCredentialProfileRequestStatusEnum {
    Agreed = "Agreed",
    Active = "Active"
}
export declare enum CreateStoredCredentialProfileRequestTypeEnum {
    Recurring = "Recurring",
    Unscheduled = "Unscheduled"
}
export declare class CreateStoredCredentialProfileRequest extends SpeakeasyBase {
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
    action?: CreateStoredCredentialProfileRequestActionEnum;
    /**
     * The date on which the profile is agreed. The date format is `yyyy-mm-dd`.
     *
     * @remarks
     *
     */
    agreedOn?: Date;
    /**
     * Specifies the ID of the payment gateway that Zuora will use when activating the stored credential profile.
     *
     * @remarks
     *
     */
    authGateway?: string;
    /**
     * The security code of the credit card.
     *
     * @remarks
     *
     */
    cardSecurityCode?: string;
    /**
     * Specifies your reference for the consent agreement that you have established with the customer.
     *
     * @remarks
     *
     */
    consentAgreementRef?: string;
    consentAgreementSrc: CreateStoredCredentialProfileRequestConsentAgreementSrcEnum;
    /**
     * The ID of a network transaction.
     *
     * @remarks
     *
     */
    networkTransactionId?: string;
    /**
     * Specifies the status of the stored credential profile.
     *
     * @remarks
     *
     * * `Active` - Use this value if you are creating the stored credential profile after receiving the customer's consent, or if the stored credential profile represents a stored credential profile in an external system.
     *
     *   You can use the `action` field to specify how Zuora activates the stored credential profile.
     *
     *
     * * `Agreed` - Use this value if you are migrating the payment method to the stored credential transaction framework.
     *
     *   In this case, Zuora will not send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile.
     *
     */
    status: CreateStoredCredentialProfileRequestStatusEnum;
    type: CreateStoredCredentialProfileRequestTypeEnum;
}
