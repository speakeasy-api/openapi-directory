import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectBulkDeleteFilter } from "./customobjectbulkdeletefilter";
export declare enum CustomObjectBulkJobRequestNamespaceEnum {
    Default = "default",
    ComZuora = "com_zuora"
}
export declare enum CustomObjectBulkJobRequestOperationEnum {
    Delete = "delete",
    Create = "create"
}
export declare class CustomObjectBulkJobRequest extends SpeakeasyBase {
    filter?: CustomObjectBulkDeleteFilter;
    namespace: CustomObjectBulkJobRequestNamespaceEnum;
    object: string;
    operation: CustomObjectBulkJobRequestOperationEnum;
}
