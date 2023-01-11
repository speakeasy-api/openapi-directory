import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateSubscribedEventEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}


export class UpdateSubscribedEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventName" })
  eventName: UpdateSubscribedEventEventNameEnum;
}


export class UpdateSubscribedEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSubscribedEventPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCobrandNotificationEventRequest;
}


export class UpdateSubscribedEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
