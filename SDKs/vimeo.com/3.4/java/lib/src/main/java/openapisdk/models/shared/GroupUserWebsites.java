package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GroupUserWebsites {
    @JsonProperty("description")
    public String description;
    public GroupUserWebsites withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public GroupUserWebsites withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GroupUserWebsites withName(String name) {
        this.name = name;
        return this;
    }
}