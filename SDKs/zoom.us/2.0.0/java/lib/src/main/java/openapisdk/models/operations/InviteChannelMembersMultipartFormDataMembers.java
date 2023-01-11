package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InviteChannelMembersMultipartFormDataMembers {
    @JsonProperty("email")
    public String email;
    public InviteChannelMembersMultipartFormDataMembers withEmail(String email) {
        this.email = email;
        return this;
    }
}