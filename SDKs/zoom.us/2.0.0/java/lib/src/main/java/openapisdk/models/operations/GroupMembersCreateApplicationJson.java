package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupMembersCreateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public GroupMembersCreateApplicationJsonMembers[] members;
    public GroupMembersCreateApplicationJson withMembers(GroupMembersCreateApplicationJsonMembers[] members) {
        this.members = members;
        return this;
    }
}