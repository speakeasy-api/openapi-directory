package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImGroupMembersCreateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public ImGroupMembersCreateApplicationJsonMembers[] members;
    public ImGroupMembersCreateApplicationJson withMembers(ImGroupMembersCreateApplicationJsonMembers[] members) {
        this.members = members;
        return this;
    }
}