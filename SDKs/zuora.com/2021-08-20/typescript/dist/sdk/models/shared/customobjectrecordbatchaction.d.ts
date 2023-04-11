import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the batch action
 */
export declare enum CustomObjectRecordBatchActionTypeEnum {
    Delete = "delete",
    Update = "update"
}
/**
 * The batch action on custom object records
 */
export declare class CustomObjectRecordBatchAction extends SpeakeasyBase {
    /**
     * Indicates whether the records that pass the schema validation should be updated when not all records in the request pass the schema validation.
     *
     * @remarks
     *
     * This field is applicable only to the batch update actions.
     *
     */
    allowPartialSuccess?: boolean;
    /**
     * Ids of the custom object records that you want to delete. Only applicable when `type` is `delete`.
     */
    ids?: string[];
    /**
     * Object records that you want to update. Only applicable when `type` is `update`.
     */
    records?: Record<string, Record<string, any>>;
    /**
     * The type of the batch action
     */
    type: CustomObjectRecordBatchActionTypeEnum;
}
