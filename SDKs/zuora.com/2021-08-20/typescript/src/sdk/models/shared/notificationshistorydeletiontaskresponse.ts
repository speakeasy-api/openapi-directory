import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NotificationsHistoryDeletionTaskResponseStatusEnum {
    Running = "RUNNING",
    Finished = "FINISHED",
    Failed = "FAILED"
}


// NotificationsHistoryDeletionTaskResponse
/** 
 * The notification history deletion task information.
**/
export class NotificationsHistoryDeletionTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: NotificationsHistoryDeletionTaskResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tenantId" })
  tenantId?: string;
}
