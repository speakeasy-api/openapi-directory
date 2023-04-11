import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the pre-authorized permissions.
 */
export declare class PreAuthorizedApplicationPermission extends SpeakeasyBase {
    /**
     * The list of permissions.
     */
    accessGrants?: string[];
    /**
     * Indicates whether the permission set is DirectAccess or impersonation.
     */
    directAccessGrant?: boolean;
}
