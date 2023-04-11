import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectBulkDeleteFilterCondition } from "./customobjectbulkdeletefiltercondition";
/**
 * Filters to determine which records to be deleted in the bulk delete operation.
 */
export declare class CustomObjectBulkDeleteFilter extends SpeakeasyBase {
    /**
     * Group of field filter conditions that are evaluated in conjunction with each other using the AND operator. The minimum number of conditions is 1 and the maximum is 2.
     */
    conditions: CustomObjectBulkDeleteFilterCondition[];
}
