import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum {
    External = "External"
}

export enum GetStoredCredentialProfilesResponseProfilesStatusEnum {
    Agreed = "Agreed",
    Active = "Active",
    Cancelled = "Cancelled",
    Expired = "Expired"
}

export enum GetStoredCredentialProfilesResponseProfilesTypeEnum {
    Recurring = "Recurring",
    Unscheduled = "Unscheduled"
}


// GetStoredCredentialProfilesResponseProfiles
/** 
 * Container for stored credential profiles.
 * 
**/
export class GetStoredCredentialProfilesResponseProfiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activatedOn" })
  activatedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=agreedOn" })
  agreedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=cancelledOn" })
  cancelledOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=consentAgreementRef" })
  consentAgreementRef?: string;

  @SpeakeasyMetadata({ data: "json, name=consentAgreementSrc" })
  consentAgreementSrc?: GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum;

  @SpeakeasyMetadata({ data: "json, name=expiredOn" })
  expiredOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetStoredCredentialProfilesResponseProfilesStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetStoredCredentialProfilesResponseProfilesTypeEnum;
}


export class GetStoredCredentialProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profiles" })
  profiles?: GetStoredCredentialProfilesResponseProfiles;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
