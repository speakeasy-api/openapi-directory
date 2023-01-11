package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoProject
 * Information about the folder that contains this video.
**/
public class VideoProject {
    @JsonProperty("created_time")
    public String createdTime;
    public VideoProject withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonProperty("metadata")
    public VideoProjectMetadata metadata;
    public VideoProject withMetadata(VideoProjectMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("modified_time")
    public String modifiedTime;
    public VideoProject withModifiedTime(String modifiedTime) {
        this.modifiedTime = modifiedTime;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public VideoProject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public VideoProject withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoProject withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("user")
    public User user;
    public VideoProject withUser(User user) {
        this.user = user;
        return this;
    }
}