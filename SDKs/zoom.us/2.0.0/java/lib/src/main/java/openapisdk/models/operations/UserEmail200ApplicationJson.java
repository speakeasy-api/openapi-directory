package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserEmail200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existed_email")
    public Boolean existedEmail;
    public UserEmail200ApplicationJson withExistedEmail(Boolean existedEmail) {
        this.existedEmail = existedEmail;
        return this;
    }
}