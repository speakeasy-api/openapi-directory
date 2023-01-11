import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDeleteNotificationHistoryForAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" })
  accountId: string;
}


export class DeleteDeleteNotificationHistoryForAccountHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class DeleteDeleteNotificationHistoryForAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteDeleteNotificationHistoryForAccountQueryParams;

  @SpeakeasyMetadata()
  headers: DeleteDeleteNotificationHistoryForAccountHeaders;
}


export class DeleteDeleteNotificationHistoryForAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteDELETENotificationHistoryForAccount400ApplicationJSONString?: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  notificationsHistoryDeletionTaskResponse?: shared.NotificationsHistoryDeletionTaskResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
