package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupGetMemberGroupsResult
 * Server response for GetMemberGroups API call.
**/
public class GroupGetMemberGroupsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String[] value;
    public GroupGetMemberGroupsResult withValue(String[] value) {
        this.value = value;
        return this;
    }
}