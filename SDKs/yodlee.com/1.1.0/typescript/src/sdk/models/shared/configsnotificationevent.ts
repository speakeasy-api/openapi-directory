import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConfigsNotificationEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}


export class ConfigsNotificationEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callbackUrl" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: ConfigsNotificationEventNameEnum;
}
