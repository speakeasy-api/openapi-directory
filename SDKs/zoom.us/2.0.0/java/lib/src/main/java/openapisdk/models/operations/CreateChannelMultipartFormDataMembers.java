package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateChannelMultipartFormDataMembers {
    @JsonProperty("email")
    public String email;
    public CreateChannelMultipartFormDataMembers withEmail(String email) {
        this.email = email;
        return this;
    }
}