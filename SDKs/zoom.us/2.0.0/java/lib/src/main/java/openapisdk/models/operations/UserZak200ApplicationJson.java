package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserZak200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public UserZak200ApplicationJson withToken(String token) {
        this.token = token;
        return this;
    }
}