import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectBulkDeleteFilter } from "./customobjectbulkdeletefilter";
/**
 * The namespace of the object. Custom objects belong to the `default` namespace. Zuora standard objects belong to the `com_zuora` namespace. Bulk job operations on the following Zuora standard objects are supported:
 *
 * @remarks
 * * SavedQuery
 *
 */
export declare enum CustomObjectBulkJobRequestNamespaceEnum {
    Default = "default",
    ComZuora = "com_zuora"
}
/**
 * The operation that the bulk job performs. Only the users that have the "Delete Custom Objects" permission can submit a `delete` bulk job request. Only the users that have the "Edit Custom Objects" permission can submit a `create` or `update` bulk job request. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
 */
export declare enum CustomObjectBulkJobRequestOperationEnum {
    Delete = "delete",
    Create = "create"
}
/**
 * Custom Objects bulk job request
 */
export declare class CustomObjectBulkJobRequest extends SpeakeasyBase {
    /**
     * Filters to determine which records to be deleted in the bulk delete operation.
     */
    filter?: CustomObjectBulkDeleteFilter;
    /**
     * The namespace of the object. Custom objects belong to the `default` namespace. Zuora standard objects belong to the `com_zuora` namespace. Bulk job operations on the following Zuora standard objects are supported:
     *
     * @remarks
     * * SavedQuery
     *
     */
    namespace: CustomObjectBulkJobRequestNamespaceEnum;
    /**
     * The object that the bulk operation performs on.
     */
    object: string;
    /**
     * The operation that the bulk job performs. Only the users that have the "Delete Custom Objects" permission can submit a `delete` bulk job request. Only the users that have the "Edit Custom Objects" permission can submit a `create` or `update` bulk job request. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
     */
    operation: CustomObjectBulkJobRequestOperationEnum;
}
