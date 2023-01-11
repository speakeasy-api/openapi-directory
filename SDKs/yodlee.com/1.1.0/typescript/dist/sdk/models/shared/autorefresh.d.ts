import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AutoRefreshAdditionalStatusEnum {
    Scheduled = "SCHEDULED",
    TempError = "TEMP_ERROR",
    SiteBlocking = "SITE_BLOCKING",
    SiteNotSupported = "SITE_NOT_SUPPORTED",
    RealTimeMfaRequired = "REAL_TIME_MFA_REQUIRED",
    UserActionRequired = "USER_ACTION_REQUIRED",
    Unsubscribed = "UNSUBSCRIBED",
    ManualAccount = "MANUAL_ACCOUNT"
}
export declare enum AutoRefreshStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class AutoRefresh extends SpeakeasyBase {
    additionalStatus?: AutoRefreshAdditionalStatusEnum;
    asOfDate?: string;
    status?: AutoRefreshStatusEnum;
}
