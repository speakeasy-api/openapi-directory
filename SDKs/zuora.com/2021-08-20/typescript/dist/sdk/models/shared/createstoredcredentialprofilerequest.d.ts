import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateStoredCredentialProfileRequestActionEnum {
    Activate = "Activate",
    Persist = "Persist"
}
export declare enum CreateStoredCredentialProfileRequestConsentAgreementSrcEnum {
    External = "External"
}
export declare enum CreateStoredCredentialProfileRequestStatusEnum {
    Agreed = "Agreed",
    Active = "Active"
}
export declare enum CreateStoredCredentialProfileRequestTypeEnum {
    Recurring = "Recurring",
    Unscheduled = "Unscheduled"
}
export declare class CreateStoredCredentialProfileRequest extends SpeakeasyBase {
    action?: CreateStoredCredentialProfileRequestActionEnum;
    agreedOn?: Date;
    authGateway?: string;
    cardSecurityCode?: string;
    consentAgreementRef?: string;
    consentAgreementSrc: CreateStoredCredentialProfileRequestConsentAgreementSrcEnum;
    networkTransactionId?: string;
    status: CreateStoredCredentialProfileRequestStatusEnum;
    type: CreateStoredCredentialProfileRequestTypeEnum;
}
