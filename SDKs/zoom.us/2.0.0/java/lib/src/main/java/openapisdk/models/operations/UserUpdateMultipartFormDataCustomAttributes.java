package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserUpdateMultipartFormDataCustomAttributes
 * Custom attribute(s) of the user.
**/
public class UserUpdateMultipartFormDataCustomAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public UserUpdateMultipartFormDataCustomAttributes withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserUpdateMultipartFormDataCustomAttributes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public UserUpdateMultipartFormDataCustomAttributes withValue(String value) {
        this.value = value;
        return this;
    }
}