package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddMembersToSharedLineGroupApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public AddMembersToSharedLineGroupApplicationJsonMembers members;
    public AddMembersToSharedLineGroupApplicationJson withMembers(AddMembersToSharedLineGroupApplicationJsonMembers members) {
        this.members = members;
        return this;
    }
}