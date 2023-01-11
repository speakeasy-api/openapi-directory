import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateStoredCredentialProfileRequestActionEnum {
    Activate = "Activate",
    Persist = "Persist"
}

export enum CreateStoredCredentialProfileRequestConsentAgreementSrcEnum {
    External = "External"
}

export enum CreateStoredCredentialProfileRequestStatusEnum {
    Agreed = "Agreed",
    Active = "Active"
}

export enum CreateStoredCredentialProfileRequestTypeEnum {
    Recurring = "Recurring",
    Unscheduled = "Unscheduled"
}


export class CreateStoredCredentialProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: CreateStoredCredentialProfileRequestActionEnum;

  @SpeakeasyMetadata({ data: "json, name=agreedOn" })
  agreedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=authGateway" })
  authGateway?: string;

  @SpeakeasyMetadata({ data: "json, name=cardSecurityCode" })
  cardSecurityCode?: string;

  @SpeakeasyMetadata({ data: "json, name=consentAgreementRef" })
  consentAgreementRef?: string;

  @SpeakeasyMetadata({ data: "json, name=consentAgreementSrc" })
  consentAgreementSrc: CreateStoredCredentialProfileRequestConsentAgreementSrcEnum;

  @SpeakeasyMetadata({ data: "json, name=networkTransactionId" })
  networkTransactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CreateStoredCredentialProfileRequestStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateStoredCredentialProfileRequestTypeEnum;
}
