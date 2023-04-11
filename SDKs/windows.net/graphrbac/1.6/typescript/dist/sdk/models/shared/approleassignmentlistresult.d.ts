import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AppRoleAssignment list operation result.
 */
export declare class AppRoleAssignmentListResult extends SpeakeasyBase {
    /**
     * The URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * A collection of AppRoleAssignment.
     */
    value?: Record<string, Record<string, any>>[];
}
