package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserPermission200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String[] permissions;
    public UserPermission200ApplicationJson withPermissions(String[] permissions) {
        this.permissions = permissions;
        return this;
    }
}