import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectBulkDeleteFilterCondition } from "./customobjectbulkdeletefiltercondition";



// CustomObjectBulkDeleteFilter
/** 
 * Filters to determine which records to be deleted in the bulk delete operation.
**/
export class CustomObjectBulkDeleteFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: CustomObjectBulkDeleteFilterCondition })
  conditions: CustomObjectBulkDeleteFilterCondition[];
}
