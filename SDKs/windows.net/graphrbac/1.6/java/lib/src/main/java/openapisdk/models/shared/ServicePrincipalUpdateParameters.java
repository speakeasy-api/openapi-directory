package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServicePrincipalUpdateParameters
 * Active Directory service principal common properties shared among GET, POST and PATCH
**/
public class ServicePrincipalUpdateParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountEnabled")
    public Boolean accountEnabled;
    public ServicePrincipalUpdateParameters withAccountEnabled(Boolean accountEnabled) {
        this.accountEnabled = accountEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appRoleAssignmentRequired")
    public Boolean appRoleAssignmentRequired;
    public ServicePrincipalUpdateParameters withAppRoleAssignmentRequired(Boolean appRoleAssignmentRequired) {
        this.appRoleAssignmentRequired = appRoleAssignmentRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyCredentials")
    public java.util.Map<String, java.util.Map<String, Object>>[] keyCredentials;
    public ServicePrincipalUpdateParameters withKeyCredentials(java.util.Map<String, java.util.Map<String, Object>>[] keyCredentials) {
        this.keyCredentials = keyCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordCredentials")
    public java.util.Map<String, java.util.Map<String, Object>>[] passwordCredentials;
    public ServicePrincipalUpdateParameters withPasswordCredentials(java.util.Map<String, java.util.Map<String, Object>>[] passwordCredentials) {
        this.passwordCredentials = passwordCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servicePrincipalType")
    public String servicePrincipalType;
    public ServicePrincipalUpdateParameters withServicePrincipalType(String servicePrincipalType) {
        this.servicePrincipalType = servicePrincipalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public ServicePrincipalUpdateParameters withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}