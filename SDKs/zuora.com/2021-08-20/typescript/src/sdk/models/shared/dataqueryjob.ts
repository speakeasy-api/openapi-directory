import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DataQueryJobQueryStatusEnum {
    Submitted = "submitted",
    Accepted = "accepted",
    InProgress = "in_progress",
    Completed = "completed",
    Failed = "failed",
    Cancelled = "cancelled"
}


// DataQueryJob
/** 
 * A data query job.
 * 
**/
export class DataQueryJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=dataFile" })
  dataFile?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=outputRows" })
  outputRows?: number;

  @SpeakeasyMetadata({ data: "json, name=processingTime" })
  processingTime?: number;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=queryStatus" })
  queryStatus?: DataQueryJobQueryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=remainingRetries" })
  remainingRetries?: number;

  @SpeakeasyMetadata({ data: "json, name=updatedOn" })
  updatedOn?: Date;
}
