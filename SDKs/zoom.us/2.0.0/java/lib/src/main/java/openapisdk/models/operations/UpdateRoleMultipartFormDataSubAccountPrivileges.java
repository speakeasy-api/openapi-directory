package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateRoleMultipartFormDataSubAccountPrivileges
 * This field will only be displayed to accounts that are enrolled in the partner plan and follow master accounts and sub accounts structure.
**/
public class UpdateRoleMultipartFormDataSubAccountPrivileges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("second_level")
    public Long secondLevel;
    public UpdateRoleMultipartFormDataSubAccountPrivileges withSecondLevel(Long secondLevel) {
        this.secondLevel = secondLevel;
        return this;
    }
}