package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandPageVideoUserWebsites {
    @JsonProperty("description")
    public String description;
    public OnDemandPageVideoUserWebsites withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public OnDemandPageVideoUserWebsites withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public OnDemandPageVideoUserWebsites withName(String name) {
        this.name = name;
        return this;
    }
}