package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InviteChannelMembersApplicationJsonMembers {
    @JsonProperty("email")
    public String email;
    public InviteChannelMembersApplicationJsonMembers withEmail(String email) {
        this.email = email;
        return this;
    }
}