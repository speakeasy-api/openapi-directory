package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateAccountOwnerApplicationJson {
    @JsonProperty("email")
    public String email;
    public UpdateAccountOwnerApplicationJson withEmail(String email) {
        this.email = email;
        return this;
    }
}