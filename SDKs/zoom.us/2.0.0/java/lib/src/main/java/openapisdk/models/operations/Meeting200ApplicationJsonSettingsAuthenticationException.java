package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Meeting200ApplicationJsonSettingsAuthenticationException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Meeting200ApplicationJsonSettingsAuthenticationException withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Meeting200ApplicationJsonSettingsAuthenticationException withName(String name) {
        this.name = name;
        return this;
    }
}