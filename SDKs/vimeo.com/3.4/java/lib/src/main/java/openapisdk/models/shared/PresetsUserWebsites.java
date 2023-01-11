package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PresetsUserWebsites {
    @JsonProperty("description")
    public String description;
    public PresetsUserWebsites withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public PresetsUserWebsites withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PresetsUserWebsites withName(String name) {
        this.name = name;
        return this;
    }
}