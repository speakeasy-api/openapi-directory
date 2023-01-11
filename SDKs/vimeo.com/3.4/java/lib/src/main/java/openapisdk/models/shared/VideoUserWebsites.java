package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VideoUserWebsites {
    @JsonProperty("description")
    public String description;
    public VideoUserWebsites withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public VideoUserWebsites withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public VideoUserWebsites withName(String name) {
        this.name = name;
        return this;
    }
}