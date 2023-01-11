import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AutoRefreshAdditionalStatusEnum {
    Scheduled = "SCHEDULED",
    TempError = "TEMP_ERROR",
    SiteBlocking = "SITE_BLOCKING",
    SiteNotSupported = "SITE_NOT_SUPPORTED",
    RealTimeMfaRequired = "REAL_TIME_MFA_REQUIRED",
    UserActionRequired = "USER_ACTION_REQUIRED",
    Unsubscribed = "UNSUBSCRIBED",
    ManualAccount = "MANUAL_ACCOUNT"
}

export enum AutoRefreshStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


export class AutoRefresh extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalStatus" })
  additionalStatus?: AutoRefreshAdditionalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=asOfDate" })
  asOfDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AutoRefreshStatusEnum;
}
