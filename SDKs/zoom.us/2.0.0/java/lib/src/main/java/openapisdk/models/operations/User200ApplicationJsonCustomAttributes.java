package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * User200ApplicationJsonCustomAttributes
 * Custom attribute(s) that have been assigned to the user.
**/
public class User200ApplicationJsonCustomAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public User200ApplicationJsonCustomAttributes withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public User200ApplicationJsonCustomAttributes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public User200ApplicationJsonCustomAttributes withValue(String value) {
        this.value = value;
        return this;
    }
}