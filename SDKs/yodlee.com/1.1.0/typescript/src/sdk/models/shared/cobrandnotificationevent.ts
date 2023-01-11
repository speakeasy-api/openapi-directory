import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CobrandNotificationEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}


export class CobrandNotificationEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callbackUrl" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: CobrandNotificationEventNameEnum;
}
