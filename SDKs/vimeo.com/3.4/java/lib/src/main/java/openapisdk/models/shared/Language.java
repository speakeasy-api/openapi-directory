package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Language {
    @JsonProperty("code")
    public String code;
    public Language withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Language withName(String name) {
        this.name = name;
        return this;
    }
}