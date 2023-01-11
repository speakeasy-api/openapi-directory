import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CustomObjectRecordBatchActionTypeEnum {
    Delete = "delete",
    Update = "update"
}


// CustomObjectRecordBatchAction
/** 
 * The batch action on custom object records
**/
export class CustomObjectRecordBatchAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowPartialSuccess" })
  allowPartialSuccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=records" })
  records?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CustomObjectRecordBatchActionTypeEnum;
}
