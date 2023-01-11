import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum {
    External = "External"
}
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
**/
export declare class GetStoredCredentialProfilesResponseProfiles extends SpeakeasyBase {
    activatedOn?: Date;
    agreedOn?: Date;
    brand?: string;
    cancelledOn?: Date;
    consentAgreementRef?: string;
    consentAgreementSrc?: GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum;
    expiredOn?: Date;
    number?: number;
    paymentMethodId?: string;
    status?: GetStoredCredentialProfilesResponseProfilesStatusEnum;
    type?: GetStoredCredentialProfilesResponseProfilesTypeEnum;
}
export declare class GetStoredCredentialProfilesResponse extends SpeakeasyBase {
    profiles?: GetStoredCredentialProfilesResponseProfiles;
    success?: boolean;
}
