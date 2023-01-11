package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Endpoint {
    @JsonProperty("methods")
    public String[] methods;
    public Endpoint withMethods(String[] methods) {
        this.methods = methods;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public Endpoint withPath(String path) {
        this.path = path;
        return this;
    }
}