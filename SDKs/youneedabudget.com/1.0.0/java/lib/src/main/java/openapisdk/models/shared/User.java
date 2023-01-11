package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User {
    @JsonProperty("id")
    public String id;
    public User withId(String id) {
        this.id = id;
        return this;
    }
}