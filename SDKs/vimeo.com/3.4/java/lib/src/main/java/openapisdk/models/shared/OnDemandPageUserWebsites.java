package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandPageUserWebsites {
    @JsonProperty("description")
    public String description;
    public OnDemandPageUserWebsites withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public OnDemandPageUserWebsites withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public OnDemandPageUserWebsites withName(String name) {
        this.name = name;
        return this;
    }
}