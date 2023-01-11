package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddRoleMembersApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public AddRoleMembersApplicationJsonMembers[] members;
    public AddRoleMembersApplicationJson withMembers(AddRoleMembersApplicationJsonMembers[] members) {
        this.members = members;
        return this;
    }
}