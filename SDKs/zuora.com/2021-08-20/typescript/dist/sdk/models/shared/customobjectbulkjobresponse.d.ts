import { SpeakeasyBase } from "../../../internal/utils";
export declare class CustomObjectBulkJobResponseError extends SpeakeasyBase {
    code?: number;
    message?: string;
}
export declare enum CustomObjectBulkJobResponseNamespaceEnum {
    Default = "default",
    ComZuora = "com_zuora"
}
export declare enum CustomObjectBulkJobResponseOperationEnum {
    Delete = "delete",
    Create = "create"
}
export declare enum CustomObjectBulkJobResponseStatusEnum {
    Open = "open",
    Pending = "pending",
    InProgress = "in_progress",
    Completed = "completed",
    Failed = "failed",
    Cancelled = "cancelled"
}
export declare class CustomObjectBulkJobResponse extends SpeakeasyBase {
    createdById?: string;
    createdDate?: Date;
    id?: string;
    updatedById?: string;
    updatedDate?: Date;
    error?: CustomObjectBulkJobResponseError;
    namespace?: CustomObjectBulkJobResponseNamespaceEnum;
    object?: string;
    operation?: CustomObjectBulkJobResponseOperationEnum;
    processingTime?: number;
    recordsProcessed?: number;
    status?: CustomObjectBulkJobResponseStatusEnum;
}
