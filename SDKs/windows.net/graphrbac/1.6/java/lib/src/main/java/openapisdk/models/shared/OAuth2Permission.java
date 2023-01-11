package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OAuth2Permission
 * Represents an OAuth 2.0 delegated permission scope. The specified OAuth 2.0 delegated permission scopes may be requested by client applications (through the requiredResourceAccess collection on the Application object) when calling a resource application. The oauth2Permissions property of the ServicePrincipal entity and of the Application entity is a collection of OAuth2Permission.
**/
public class OAuth2Permission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminConsentDescription")
    public String adminConsentDescription;
    public OAuth2Permission withAdminConsentDescription(String adminConsentDescription) {
        this.adminConsentDescription = adminConsentDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminConsentDisplayName")
    public String adminConsentDisplayName;
    public OAuth2Permission withAdminConsentDisplayName(String adminConsentDisplayName) {
        this.adminConsentDisplayName = adminConsentDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OAuth2Permission withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEnabled")
    public Boolean isEnabled;
    public OAuth2Permission withIsEnabled(Boolean isEnabled) {
        this.isEnabled = isEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public OAuth2Permission withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userConsentDescription")
    public String userConsentDescription;
    public OAuth2Permission withUserConsentDescription(String userConsentDescription) {
        this.userConsentDescription = userConsentDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userConsentDisplayName")
    public String userConsentDisplayName;
    public OAuth2Permission withUserConsentDisplayName(String userConsentDisplayName) {
        this.userConsentDisplayName = userConsentDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public OAuth2Permission withValue(String value) {
        this.value = value;
        return this;
    }
}