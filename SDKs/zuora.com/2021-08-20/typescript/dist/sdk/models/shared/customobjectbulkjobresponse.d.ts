import { SpeakeasyBase } from "../../../internal/utils";
export declare class CustomObjectBulkJobResponseError extends SpeakeasyBase {
    /**
     * The error code.
     */
    code?: number;
    /**
     * The error message.
     */
    message?: string;
}
/**
 * The namespace of the object. Custom objects belong to the `default` namespace. Zuora standard objects belong to the `com_zuora` namespace. Bulk job operations on the following Zuora standard objects are supported:
 *
 * @remarks
 * * SavedQuery
 *
 */
export declare enum CustomObjectBulkJobResponseNamespaceEnum {
    Default = "default",
    ComZuora = "com_zuora"
}
/**
 * The operation that the bulk job performs. Only the users that have the "Delete Custom Objects" permission can submit a `delete` bulk job request. Only the users that have the "Edit Custom Objects" permission can submit a `create` or `update` bulk job request. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
 *
 * @remarks
 *
 */
export declare enum CustomObjectBulkJobResponseOperationEnum {
    Delete = "delete",
    Create = "create"
}
/**
 * The status of the bulk job.
 */
export declare enum CustomObjectBulkJobResponseStatusEnum {
    Open = "open",
    Pending = "pending",
    InProgress = "in_progress",
    Completed = "completed",
    Failed = "failed",
    Cancelled = "cancelled"
}
/**
 * OK
 */
export declare class CustomObjectBulkJobResponse extends SpeakeasyBase {
    /**
     * The ID of the user who creates the job.
     */
    createdById?: string;
    /**
     * The time when the bulk job is created.
     */
    createdDate?: Date;
    /**
     * The custom object bulk job ID.
     */
    id?: string;
    /**
     * The ID of the user who updates the job.
     */
    updatedById?: string;
    /**
     * The time when the bulk job is updated.
     */
    updatedDate?: Date;
    error?: CustomObjectBulkJobResponseError;
    /**
     * The namespace of the object. Custom objects belong to the `default` namespace. Zuora standard objects belong to the `com_zuora` namespace. Bulk job operations on the following Zuora standard objects are supported:
     *
     * @remarks
     * * SavedQuery
     *
     */
    namespace?: CustomObjectBulkJobResponseNamespaceEnum;
    /**
     * The object to that the bulk operation performs on.
     */
    object?: string;
    /**
     * The operation that the bulk job performs. Only the users that have the "Delete Custom Objects" permission can submit a `delete` bulk job request. Only the users that have the "Edit Custom Objects" permission can submit a `create` or `update` bulk job request. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
     *
     * @remarks
     *
     */
    operation?: CustomObjectBulkJobResponseOperationEnum;
    /**
     * The amount of time elapsed, in milliseconds, from the submission to the completion of the bulk job.
     */
    processingTime?: number;
    /**
     * The number of object records processed by the bulk job.
     */
    recordsProcessed?: number;
    /**
     * The status of the bulk job.
     */
    status?: CustomObjectBulkJobResponseStatusEnum;
}
