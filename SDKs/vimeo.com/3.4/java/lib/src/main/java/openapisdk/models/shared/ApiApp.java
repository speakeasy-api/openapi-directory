package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApiApp {
    @JsonProperty("name")
    public String name;
    public ApiApp withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public ApiApp withUri(String uri) {
        this.uri = uri;
        return this;
    }
}