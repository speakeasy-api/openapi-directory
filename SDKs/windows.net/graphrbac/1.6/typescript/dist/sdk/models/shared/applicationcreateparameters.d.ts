import { SpeakeasyBase } from "../../../internal/utils";
import { AppRole } from "./approle";
import { GroupMembershipClaimsEnum } from "./groupmembershipclaimsenum";
import { InformationalUrl } from "./informationalurl";
import { OAuth2Permission } from "./oauth2permission";
import { OptionalClaims } from "./optionalclaims";
import { PreAuthorizedApplication } from "./preauthorizedapplication";
/**
 * Active Directive Application common properties shared among GET, POST and PATCH
**/
export declare class ApplicationCreateParameters extends SpeakeasyBase {
    allowGuestsSignIn?: boolean;
    allowPassthroughUsers?: boolean;
    appLogoUrl?: string;
    appPermissions?: string[];
    appRoles?: AppRole[];
    availableToOtherTenants?: boolean;
    displayName: string;
    errorUrl?: string;
    groupMembershipClaims?: GroupMembershipClaimsEnum;
    homepage?: string;
    identifierUris?: string[];
    informationalUrls?: InformationalUrl;
    isDeviceOnlyAuthSupported?: boolean;
    keyCredentials?: Record<string, Record<string, any>>[];
    knownClientApplications?: string[];
    logoutUrl?: string;
    oauth2AllowImplicitFlow?: boolean;
    oauth2AllowUrlPathMatching?: boolean;
    oauth2Permissions?: OAuth2Permission[];
    oauth2RequirePostResponse?: boolean;
    optionalClaims?: OptionalClaims;
    orgRestrictions?: string[];
    passwordCredentials?: Record<string, Record<string, any>>[];
    preAuthorizedApplications?: PreAuthorizedApplication[];
    publicClient?: boolean;
    publisherDomain?: string;
    replyUrls?: string[];
    requiredResourceAccess?: Record<string, Record<string, any>>[];
    samlMetadataUrl?: string;
    signInAudience?: string;
    wwwHomepage?: string;
}
