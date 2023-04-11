import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Active Directory service principal common properties shared among GET, POST and PATCH
 */
export declare class ServicePrincipalUpdateParameters extends SpeakeasyBase {
    /**
     * whether or not the service principal account is enabled
     */
    accountEnabled?: boolean;
    /**
     * Specifies whether an AppRoleAssignment to a user or group is required before Azure AD will issue a user or access token to the application.
     */
    appRoleAssignmentRequired?: boolean;
    /**
     * The collection of key credentials associated with the service principal.
     */
    keyCredentials?: Record<string, Record<string, any>>[];
    /**
     * The collection of password credentials associated with the service principal.
     */
    passwordCredentials?: Record<string, Record<string, any>>[];
    /**
     * the type of the service principal
     */
    servicePrincipalType?: string;
    /**
     * Optional list of tags that you can apply to your service principals. Not nullable.
     */
    tags?: string[];
}
