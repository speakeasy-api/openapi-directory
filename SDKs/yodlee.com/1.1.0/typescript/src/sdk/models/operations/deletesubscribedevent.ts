import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteSubscribedEventEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}


export class DeleteSubscribedEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventName" })
  eventName: DeleteSubscribedEventEventNameEnum;
}


export class DeleteSubscribedEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSubscribedEventPathParams;
}


export class DeleteSubscribedEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
