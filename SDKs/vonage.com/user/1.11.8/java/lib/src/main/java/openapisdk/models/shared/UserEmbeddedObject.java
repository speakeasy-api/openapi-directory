package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserEmbeddedObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public User data;
    public UserEmbeddedObject withData(User data) {
        this.data = data;
        return this;
    }
}