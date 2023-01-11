package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddMembersToCallQueueApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public AddMembersToCallQueueApplicationJsonMembers members;
    public AddMembersToCallQueueApplicationJson withMembers(AddMembersToCallQueueApplicationJsonMembers members) {
        this.members = members;
        return this;
    }
}