package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UsersEmbeddedObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public User[] data;
    public UsersEmbeddedObject withData(User[] data) {
        this.data = data;
        return this;
    }
}