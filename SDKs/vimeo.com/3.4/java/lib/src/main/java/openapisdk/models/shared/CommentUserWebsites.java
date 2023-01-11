package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CommentUserWebsites {
    @JsonProperty("description")
    public String description;
    public CommentUserWebsites withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public CommentUserWebsites withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CommentUserWebsites withName(String name) {
        this.name = name;
        return this;
    }
}