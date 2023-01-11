import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGetNotificationHistoryDeletionTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetGetNotificationHistoryDeletionTaskHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetGetNotificationHistoryDeletionTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGetNotificationHistoryDeletionTaskPathParams;

  @SpeakeasyMetadata()
  headers: GetGetNotificationHistoryDeletionTaskHeaders;
}


export class GetGetNotificationHistoryDeletionTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  notificationsHistoryDeletionTaskResponse?: shared.NotificationsHistoryDeletionTaskResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
