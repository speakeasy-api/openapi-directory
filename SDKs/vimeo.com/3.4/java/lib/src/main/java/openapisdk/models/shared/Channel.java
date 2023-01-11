package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Channel {
    @JsonProperty("categories")
    public Category[] categories;
    public Channel withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("created_time")
    public String createdTime;
    public Channel withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public Channel withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("header")
    public Picture header;
    public Channel withHeader(Picture header) {
        this.header = header;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public Channel withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("metadata")
    public ChannelMetadata metadata;
    public Channel withMetadata(ChannelMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("modified_time")
    public String modifiedTime;
    public Channel withModifiedTime(String modifiedTime) {
        this.modifiedTime = modifiedTime;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Channel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("pictures")
    public Picture pictures;
    public Channel withPictures(Picture pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("privacy")
    public ChannelPrivacy privacy;
    public Channel withPrivacy(ChannelPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public Channel withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("tags")
    public Tag[] tags;
    public Channel withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public Channel withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("user")
    public User user;
    public Channel withUser(User user) {
        this.user = user;
        return this;
    }
}