import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an OAuth 2.0 delegated permission scope. The specified OAuth 2.0 delegated permission scopes may be requested by client applications (through the requiredResourceAccess collection on the Application object) when calling a resource application. The oauth2Permissions property of the ServicePrincipal entity and of the Application entity is a collection of OAuth2Permission.
 */
export declare class OAuth2Permission extends SpeakeasyBase {
    /**
     * Permission help text that appears in the admin consent and app assignment experiences.
     */
    adminConsentDescription?: string;
    /**
     * Display name for the permission that appears in the admin consent and app assignment experiences.
     */
    adminConsentDisplayName?: string;
    /**
     * Unique scope permission identifier inside the oauth2Permissions collection.
     */
    id?: string;
    /**
     * When creating or updating a permission, this property must be set to true (which is the default). To delete a permission, this property must first be set to false. At that point, in a subsequent call, the permission may be removed.
     */
    isEnabled?: boolean;
    /**
     * Specifies whether this scope permission can be consented to by an end user, or whether it is a tenant-wide permission that must be consented to by a Company Administrator. Possible values are "User" or "Admin".
     */
    type?: string;
    /**
     * Permission help text that appears in the end user consent experience.
     */
    userConsentDescription?: string;
    /**
     * Display name for the permission that appears in the end user consent experience.
     */
    userConsentDisplayName?: string;
    /**
     * The value of the scope claim that the resource application should expect in the OAuth 2.0 access token.
     */
    value?: string;
}
