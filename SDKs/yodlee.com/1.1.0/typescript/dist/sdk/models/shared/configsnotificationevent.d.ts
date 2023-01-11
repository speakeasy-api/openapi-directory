import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConfigsNotificationEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}
export declare class ConfigsNotificationEvent extends SpeakeasyBase {
    callbackUrl?: string;
    name?: ConfigsNotificationEventNameEnum;
}
