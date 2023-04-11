import { SpeakeasyBase } from "../../../internal/utils";
import { AppRole } from "./approle";
import { GroupMembershipClaimsEnum } from "./groupmembershipclaimsenum";
import { InformationalUrl } from "./informationalurl";
import { OAuth2Permission } from "./oauth2permission";
import { OptionalClaims } from "./optionalclaims";
import { PreAuthorizedApplication } from "./preauthorizedapplication";
/**
 * Active Directive Application common properties shared among GET, POST and PATCH
 */
export declare class ApplicationUpdateParameters extends SpeakeasyBase {
    /**
     * A property on the application to indicate if the application accepts other IDPs or not or partially accepts.
     */
    allowGuestsSignIn?: boolean;
    /**
     * Indicates that the application supports pass through users who have no presence in the resource tenant.
     */
    allowPassthroughUsers?: boolean;
    /**
     * The url for the application logo image stored in a CDN.
     */
    appLogoUrl?: string;
    /**
     * The application permissions.
     */
    appPermissions?: string[];
    /**
     * The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.
     */
    appRoles?: AppRole[];
    /**
     * Whether the application is available to other tenants.
     */
    availableToOtherTenants?: boolean;
    /**
     * The display name of the application.
     */
    displayName?: string;
    /**
     * A URL provided by the author of the application to report errors when using the application.
     */
    errorUrl?: string;
    /**
     * Configures the groups claim issued in a user or OAuth 2.0 access token that the app expects.
     */
    groupMembershipClaims?: GroupMembershipClaimsEnum;
    /**
     * The home page of the application.
     */
    homepage?: string;
    /**
     * A collection of URIs for the application.
     */
    identifierUris?: string[];
    /**
     * Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.
     */
    informationalUrls?: InformationalUrl;
    /**
     * Specifies whether this application supports device authentication without a user. The default is false.
     */
    isDeviceOnlyAuthSupported?: boolean;
    /**
     * A collection of KeyCredential objects.
     */
    keyCredentials?: Record<string, Record<string, any>>[];
    /**
     * Client applications that are tied to this resource application. Consent to any of the known client applications will result in implicit consent to the resource application through a combined consent dialog (showing the OAuth permission scopes required by the client and the resource).
     */
    knownClientApplications?: string[];
    /**
     * the url of the logout page
     */
    logoutUrl?: string;
    /**
     * Whether to allow implicit grant flow for OAuth2
     */
    oauth2AllowImplicitFlow?: boolean;
    /**
     * Specifies whether during a token Request Azure AD will allow path matching of the redirect URI against the applications collection of replyURLs. The default is false.
     */
    oauth2AllowUrlPathMatching?: boolean;
    /**
     * The collection of OAuth 2.0 permission scopes that the web API (resource) application exposes to client applications. These permission scopes may be granted to client applications during consent.
     */
    oauth2Permissions?: OAuth2Permission[];
    /**
     * Specifies whether, as part of OAuth 2.0 token requests, Azure AD will allow POST requests, as opposed to GET requests. The default is false, which specifies that only GET requests will be allowed.
     */
    oauth2RequirePostResponse?: boolean;
    /**
     * Specifying the claims to be included in the token.
     */
    optionalClaims?: OptionalClaims;
    /**
     * A list of tenants allowed to access application.
     */
    orgRestrictions?: string[];
    /**
     * A collection of PasswordCredential objects
     */
    passwordCredentials?: Record<string, Record<string, any>>[];
    /**
     * list of pre-authorized applications.
     */
    preAuthorizedApplications?: PreAuthorizedApplication[];
    /**
     * Specifies whether this application is a public client (such as an installed application running on a mobile device). Default is false.
     */
    publicClient?: boolean;
    /**
     * Reliable domain which can be used to identify an application.
     */
    publisherDomain?: string;
    /**
     * A collection of reply URLs for the application.
     */
    replyUrls?: string[];
    /**
     * Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience.
     */
    requiredResourceAccess?: Record<string, Record<string, any>>[];
    /**
     * The URL to the SAML metadata for the application.
     */
    samlMetadataUrl?: string;
    /**
     * Audience for signing in to the application (AzureADMyOrganization, AzureADAllOrganizations, AzureADAndMicrosoftAccounts).
     */
    signInAudience?: string;
    /**
     * The primary Web page.
     */
    wwwHomepage?: string;
}
