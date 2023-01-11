package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationCreateParameters
 * Active Directive Application common properties shared among GET, POST and PATCH
**/
public class ApplicationCreateParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowGuestsSignIn")
    public Boolean allowGuestsSignIn;
    public ApplicationCreateParameters withAllowGuestsSignIn(Boolean allowGuestsSignIn) {
        this.allowGuestsSignIn = allowGuestsSignIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowPassthroughUsers")
    public Boolean allowPassthroughUsers;
    public ApplicationCreateParameters withAllowPassthroughUsers(Boolean allowPassthroughUsers) {
        this.allowPassthroughUsers = allowPassthroughUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appLogoUrl")
    public String appLogoUrl;
    public ApplicationCreateParameters withAppLogoUrl(String appLogoUrl) {
        this.appLogoUrl = appLogoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appPermissions")
    public String[] appPermissions;
    public ApplicationCreateParameters withAppPermissions(String[] appPermissions) {
        this.appPermissions = appPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appRoles")
    public AppRole[] appRoles;
    public ApplicationCreateParameters withAppRoles(AppRole[] appRoles) {
        this.appRoles = appRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableToOtherTenants")
    public Boolean availableToOtherTenants;
    public ApplicationCreateParameters withAvailableToOtherTenants(Boolean availableToOtherTenants) {
        this.availableToOtherTenants = availableToOtherTenants;
        return this;
    }
    @JsonProperty("displayName")
    public String displayName;
    public ApplicationCreateParameters withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorUrl")
    public String errorUrl;
    public ApplicationCreateParameters withErrorUrl(String errorUrl) {
        this.errorUrl = errorUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupMembershipClaims")
    public GroupMembershipClaimsEnum groupMembershipClaims;
    public ApplicationCreateParameters withGroupMembershipClaims(GroupMembershipClaimsEnum groupMembershipClaims) {
        this.groupMembershipClaims = groupMembershipClaims;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepage")
    public String homepage;
    public ApplicationCreateParameters withHomepage(String homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifierUris")
    public String[] identifierUris;
    public ApplicationCreateParameters withIdentifierUris(String[] identifierUris) {
        this.identifierUris = identifierUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("informationalUrls")
    public InformationalUrl informationalUrls;
    public ApplicationCreateParameters withInformationalUrls(InformationalUrl informationalUrls) {
        this.informationalUrls = informationalUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDeviceOnlyAuthSupported")
    public Boolean isDeviceOnlyAuthSupported;
    public ApplicationCreateParameters withIsDeviceOnlyAuthSupported(Boolean isDeviceOnlyAuthSupported) {
        this.isDeviceOnlyAuthSupported = isDeviceOnlyAuthSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyCredentials")
    public java.util.Map<String, java.util.Map<String, Object>>[] keyCredentials;
    public ApplicationCreateParameters withKeyCredentials(java.util.Map<String, java.util.Map<String, Object>>[] keyCredentials) {
        this.keyCredentials = keyCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("knownClientApplications")
    public String[] knownClientApplications;
    public ApplicationCreateParameters withKnownClientApplications(String[] knownClientApplications) {
        this.knownClientApplications = knownClientApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logoutUrl")
    public String logoutUrl;
    public ApplicationCreateParameters withLogoutUrl(String logoutUrl) {
        this.logoutUrl = logoutUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth2AllowImplicitFlow")
    public Boolean oauth2AllowImplicitFlow;
    public ApplicationCreateParameters withOauth2AllowImplicitFlow(Boolean oauth2AllowImplicitFlow) {
        this.oauth2AllowImplicitFlow = oauth2AllowImplicitFlow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth2AllowUrlPathMatching")
    public Boolean oauth2AllowUrlPathMatching;
    public ApplicationCreateParameters withOauth2AllowUrlPathMatching(Boolean oauth2AllowUrlPathMatching) {
        this.oauth2AllowUrlPathMatching = oauth2AllowUrlPathMatching;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth2Permissions")
    public OAuth2Permission[] oauth2Permissions;
    public ApplicationCreateParameters withOauth2Permissions(OAuth2Permission[] oauth2Permissions) {
        this.oauth2Permissions = oauth2Permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth2RequirePostResponse")
    public Boolean oauth2RequirePostResponse;
    public ApplicationCreateParameters withOauth2RequirePostResponse(Boolean oauth2RequirePostResponse) {
        this.oauth2RequirePostResponse = oauth2RequirePostResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optionalClaims")
    public OptionalClaims optionalClaims;
    public ApplicationCreateParameters withOptionalClaims(OptionalClaims optionalClaims) {
        this.optionalClaims = optionalClaims;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgRestrictions")
    public String[] orgRestrictions;
    public ApplicationCreateParameters withOrgRestrictions(String[] orgRestrictions) {
        this.orgRestrictions = orgRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordCredentials")
    public java.util.Map<String, java.util.Map<String, Object>>[] passwordCredentials;
    public ApplicationCreateParameters withPasswordCredentials(java.util.Map<String, java.util.Map<String, Object>>[] passwordCredentials) {
        this.passwordCredentials = passwordCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preAuthorizedApplications")
    public PreAuthorizedApplication[] preAuthorizedApplications;
    public ApplicationCreateParameters withPreAuthorizedApplications(PreAuthorizedApplication[] preAuthorizedApplications) {
        this.preAuthorizedApplications = preAuthorizedApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicClient")
    public Boolean publicClient;
    public ApplicationCreateParameters withPublicClient(Boolean publicClient) {
        this.publicClient = publicClient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherDomain")
    public String publisherDomain;
    public ApplicationCreateParameters withPublisherDomain(String publisherDomain) {
        this.publisherDomain = publisherDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyUrls")
    public String[] replyUrls;
    public ApplicationCreateParameters withReplyUrls(String[] replyUrls) {
        this.replyUrls = replyUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiredResourceAccess")
    public java.util.Map<String, java.util.Map<String, Object>>[] requiredResourceAccess;
    public ApplicationCreateParameters withRequiredResourceAccess(java.util.Map<String, java.util.Map<String, Object>>[] requiredResourceAccess) {
        this.requiredResourceAccess = requiredResourceAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samlMetadataUrl")
    public String samlMetadataUrl;
    public ApplicationCreateParameters withSamlMetadataUrl(String samlMetadataUrl) {
        this.samlMetadataUrl = samlMetadataUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signInAudience")
    public String signInAudience;
    public ApplicationCreateParameters withSignInAudience(String signInAudience) {
        this.signInAudience = signInAudience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wwwHomepage")
    public String wwwHomepage;
    public ApplicationCreateParameters withWwwHomepage(String wwwHomepage) {
        this.wwwHomepage = wwwHomepage;
        return this;
    }
}