package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreAuthorizedApplication
 * Contains information about pre authorized client application.
**/
public class PreAuthorizedApplication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public PreAuthorizedApplication withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extensions")
    public PreAuthorizedApplicationExtension[] extensions;
    public PreAuthorizedApplication withExtensions(PreAuthorizedApplicationExtension[] extensions) {
        this.extensions = extensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public PreAuthorizedApplicationPermission[] permissions;
    public PreAuthorizedApplication withPermissions(PreAuthorizedApplicationPermission[] permissions) {
        this.permissions = permissions;
        return this;
    }
}