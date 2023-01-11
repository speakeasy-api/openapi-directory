package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VideoVersionsUserWebsites {
    @JsonProperty("description")
    public String description;
    public VideoVersionsUserWebsites withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public VideoVersionsUserWebsites withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public VideoVersionsUserWebsites withName(String name) {
        this.name = name;
        return this;
    }
}