package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InviteChannelMembersApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public InviteChannelMembersApplicationJsonMembers[] members;
    public InviteChannelMembersApplicationJson withMembers(InviteChannelMembersApplicationJsonMembers[] members) {
        this.members = members;
        return this;
    }
}