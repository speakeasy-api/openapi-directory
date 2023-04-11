import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum {
    External = "External"
}
/**
 * The status of the stored credential profile.
 *
 * @remarks
 *
 * * `Agreed` - The stored credential profile has not been validated via an authorization transaction with the payment gateway.
 * * `Active` - The stored credential profile has been validated via an authorization transaction with the payment gateway.
 * * `Cancelled` - The stored credentials are no longer valid, per a customer request. Zuora cannot use the stored credentials in transactions.
 * * `Expired` - The stored credentials are no longer valid, per an expiration policy in the stored credential transaction framework. Zuora cannot use the stored credentials in transactions.
 *
 */
export declare enum GetStoredCredentialProfilesResponseProfilesStatusEnum {
    Agreed = "Agreed",
    Active = "Active",
    Cancelled = "Cancelled",
    Expired = "Expired"
}
export declare enum GetStoredCredentialProfilesResponseProfilesTypeEnum {
    Recurring = "Recurring",
    Unscheduled = "Unscheduled"
}
/**
 * Container for stored credential profiles.
 *
 * @remarks
 *
 */
export declare class GetStoredCredentialProfilesResponseProfiles extends SpeakeasyBase {
    /**
     * The date when the stored credential profile was activated (if applicable).
     *
     * @remarks
     *
     */
    activatedOn?: Date;
    /**
     * The date when the stored credential profile was created.
     *
     * @remarks
     *
     */
    agreedOn?: Date;
    /**
     * The stored credential transaction framework. For example, Visa.
     *
     * @remarks
     *
     */
    brand?: string;
    /**
     * The date when the stored credential profile was cancelled (if applicable).
     *
     * @remarks
     *
     */
    cancelledOn?: Date;
    /**
     * Your reference for the consent agreement that you have established with the customer.
     *
     * @remarks
     *
     */
    consentAgreementRef?: string;
    consentAgreementSrc?: GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum;
    /**
     * The date when the stored credential profile was expired (if applicable).
     *
     * @remarks
     *
     */
    expiredOn?: Date;
    /**
     * The number that identifies the stored credential profile within the payment method.
     *
     * @remarks
     *
     */
    number?: number;
    /**
     * ID of the payment method.
     *
     * @remarks
     *
     */
    paymentMethodId?: string;
    /**
     * The status of the stored credential profile.
     *
     * @remarks
     *
     * * `Agreed` - The stored credential profile has not been validated via an authorization transaction with the payment gateway.
     * * `Active` - The stored credential profile has been validated via an authorization transaction with the payment gateway.
     * * `Cancelled` - The stored credentials are no longer valid, per a customer request. Zuora cannot use the stored credentials in transactions.
     * * `Expired` - The stored credentials are no longer valid, per an expiration policy in the stored credential transaction framework. Zuora cannot use the stored credentials in transactions.
     *
     */
    status?: GetStoredCredentialProfilesResponseProfilesStatusEnum;
    type?: GetStoredCredentialProfilesResponseProfilesTypeEnum;
}
export declare class GetStoredCredentialProfilesResponse extends SpeakeasyBase {
    /**
     * Container for stored credential profiles.
     *
     * @remarks
     *
     */
    profiles?: GetStoredCredentialProfilesResponseProfiles;
    success?: boolean;
}
