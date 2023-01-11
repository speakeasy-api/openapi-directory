package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserGetMemberGroupsResult
 * Server response for GetMemberGroups API call.
**/
public class UserGetMemberGroupsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String[] value;
    public UserGetMemberGroupsResult withValue(String[] value) {
        this.value = value;
        return this;
    }
}