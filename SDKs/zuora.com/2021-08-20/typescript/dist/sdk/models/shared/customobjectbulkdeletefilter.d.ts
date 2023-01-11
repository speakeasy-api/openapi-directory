import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectBulkDeleteFilterCondition } from "./customobjectbulkdeletefiltercondition";
/**
 * Filters to determine which records to be deleted in the bulk delete operation.
**/
export declare class CustomObjectBulkDeleteFilter extends SpeakeasyBase {
    conditions: CustomObjectBulkDeleteFilterCondition[];
}
