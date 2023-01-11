package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserWebsites {
    @JsonProperty("description")
    public String description;
    public UserWebsites withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public UserWebsites withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UserWebsites withName(String name) {
        this.name = name;
        return this;
    }
}