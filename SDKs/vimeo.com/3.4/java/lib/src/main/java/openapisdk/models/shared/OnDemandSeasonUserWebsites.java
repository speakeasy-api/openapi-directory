package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandSeasonUserWebsites {
    @JsonProperty("description")
    public String description;
    public OnDemandSeasonUserWebsites withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public OnDemandSeasonUserWebsites withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public OnDemandSeasonUserWebsites withName(String name) {
        this.name = name;
        return this;
    }
}