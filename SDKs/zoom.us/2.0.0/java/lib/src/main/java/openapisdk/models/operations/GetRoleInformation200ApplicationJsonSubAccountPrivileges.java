package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetRoleInformation200ApplicationJsonSubAccountPrivileges
 * This field will only be displayed to accounts that are enrolled in a partner plan and follow the master accounts and sub accounts structure.
**/
public class GetRoleInformation200ApplicationJsonSubAccountPrivileges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("second_level")
    public Long secondLevel;
    public GetRoleInformation200ApplicationJsonSubAccountPrivileges withSecondLevel(Long secondLevel) {
        this.secondLevel = secondLevel;
        return this;
    }
}