import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomObjectBulkJobResponseError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

export enum CustomObjectBulkJobResponseNamespaceEnum {
    Default = "default",
    ComZuora = "com_zuora"
}

export enum CustomObjectBulkJobResponseOperationEnum {
    Delete = "delete",
    Create = "create"
}

export enum CustomObjectBulkJobResponseStatusEnum {
    Open = "open",
    Pending = "pending",
    InProgress = "in_progress",
    Completed = "completed",
    Failed = "failed",
    Cancelled = "cancelled"
}


export class CustomObjectBulkJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: CustomObjectBulkJobResponseError;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: CustomObjectBulkJobResponseNamespaceEnum;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: CustomObjectBulkJobResponseOperationEnum;

  @SpeakeasyMetadata({ data: "json, name=processingTime" })
  processingTime?: number;

  @SpeakeasyMetadata({ data: "json, name=recordsProcessed" })
  recordsProcessed?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CustomObjectBulkJobResponseStatusEnum;
}
