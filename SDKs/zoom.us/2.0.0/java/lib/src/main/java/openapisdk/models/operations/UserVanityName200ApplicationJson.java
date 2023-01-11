package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserVanityName200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existed")
    public Boolean existed;
    public UserVanityName200ApplicationJson withExisted(Boolean existed) {
        this.existed = existed;
        return this;
    }
}