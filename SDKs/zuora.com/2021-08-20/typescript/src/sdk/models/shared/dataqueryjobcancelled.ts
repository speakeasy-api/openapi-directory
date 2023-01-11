import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DataQueryJobCancelledQueryStatusEnum {
    Cancelled = "cancelled"
}


// DataQueryJobCancelled
/** 
 * A cancelled data query job.
 * 
**/
export class DataQueryJobCancelled extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=queryStatus" })
  queryStatus?: DataQueryJobCancelledQueryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=remainingRetries" })
  remainingRetries?: number;

  @SpeakeasyMetadata({ data: "json, name=updatedOn" })
  updatedOn?: Date;
}
