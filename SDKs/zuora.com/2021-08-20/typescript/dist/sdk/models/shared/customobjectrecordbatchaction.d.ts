import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomObjectRecordBatchActionTypeEnum {
    Delete = "delete",
    Update = "update"
}
/**
 * The batch action on custom object records
**/
export declare class CustomObjectRecordBatchAction extends SpeakeasyBase {
    allowPartialSuccess?: boolean;
    ids?: string[];
    records?: Record<string, Record<string, any>>;
    type: CustomObjectRecordBatchActionTypeEnum;
}
