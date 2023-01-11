import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CobrandNotificationEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}
export declare class CobrandNotificationEvent extends SpeakeasyBase {
    callbackUrl?: string;
    name?: CobrandNotificationEventNameEnum;
}
