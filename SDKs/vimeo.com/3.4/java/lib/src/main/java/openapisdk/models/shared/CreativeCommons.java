package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreativeCommons {
    @JsonProperty("code")
    public CreativeCommonsCodeEnum code;
    public CreativeCommons withCode(CreativeCommonsCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreativeCommons withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CreativeCommons withUri(String uri) {
        this.uri = uri;
        return this;
    }
}