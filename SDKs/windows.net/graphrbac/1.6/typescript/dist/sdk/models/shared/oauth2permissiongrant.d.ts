import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates if consent was provided by the administrator (on behalf of the organization) or by an individual.
 */
export declare enum OAuth2PermissionGrantConsentTypeEnum {
    AllPrincipals = "AllPrincipals",
    Principal = "Principal"
}
/**
 * The relevant app Service Principal Object Id and the Service Principal Object Id you want to grant.
 */
export declare class OAuth2PermissionGrant extends SpeakeasyBase {
    /**
     * The id of the resource's service principal granted consent to impersonate the user when accessing the resource (represented by the resourceId property).
     */
    clientId?: string;
    /**
     * Indicates if consent was provided by the administrator (on behalf of the organization) or by an individual.
     */
    consentType?: OAuth2PermissionGrantConsentTypeEnum;
    /**
     * Expiry time for TTL
     */
    expiryTime?: string;
    /**
     * The id of the permission grant
     */
    objectId?: string;
    /**
     * Microsoft.DirectoryServices.OAuth2PermissionGrant
     */
    odataType?: string;
    /**
     * When consent type is Principal, this property specifies the id of the user that granted consent and applies only for that user.
     */
    principalId?: string;
    /**
     * Object Id of the resource you want to grant
     */
    resourceId?: string;
    /**
     * Specifies the value of the scope claim that the resource application should expect in the OAuth 2.0 access token. For example, User.Read
     */
    scope?: string;
    /**
     * Start time for TTL
     */
    startTime?: string;
}
