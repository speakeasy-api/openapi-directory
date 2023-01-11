import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectRecordBatchAction } from "./customobjectrecordbatchaction";



// CustomObjectRecordBatchRequest
/** 
 * Request of processing custom object records in batch.
**/
export class CustomObjectRecordBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CustomObjectRecordBatchAction;
}
