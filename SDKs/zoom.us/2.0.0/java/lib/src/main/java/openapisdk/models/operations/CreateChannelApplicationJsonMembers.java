package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateChannelApplicationJsonMembers {
    @JsonProperty("email")
    public String email;
    public CreateChannelApplicationJsonMembers withEmail(String email) {
        this.email = email;
        return this;
    }
}