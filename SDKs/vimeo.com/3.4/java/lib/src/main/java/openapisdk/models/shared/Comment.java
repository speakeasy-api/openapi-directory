package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Comment {
    @JsonProperty("created_on")
    public String createdOn;
    public Comment withCreatedOn(String createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonProperty("metadata")
    public CommentMetadata metadata;
    public Comment withMetadata(CommentMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public Comment withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public Comment withText(String text) {
        this.text = text;
        return this;
    }
    @JsonProperty("type")
    public CommentTypeEnum type;
    public Comment withType(CommentTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public Comment withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("user")
    public CommentUser user;
    public Comment withUser(CommentUser user) {
        this.user = user;
        return this;
    }
}