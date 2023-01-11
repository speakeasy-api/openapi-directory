package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Users200ApplicationJsonUsersCustomAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public Users200ApplicationJsonUsersCustomAttributes withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Users200ApplicationJsonUsersCustomAttributes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Users200ApplicationJsonUsersCustomAttributes withValue(String value) {
        this.value = value;
        return this;
    }
}