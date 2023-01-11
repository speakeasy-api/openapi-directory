package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserPasswordApplicationJson {
    @JsonProperty("password")
    public String password;
    public UserPasswordApplicationJson withPassword(String password) {
        this.password = password;
        return this;
    }
}