package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoProject
 * Information about the folder that contains this video.
**/
public class OnDemandPageVideoProject {
    @JsonProperty("created_time")
    public String createdTime;
    public OnDemandPageVideoProject withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonProperty("metadata")
    public OnDemandPageVideoProjectMetadata metadata;
    public OnDemandPageVideoProject withMetadata(OnDemandPageVideoProjectMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("modified_time")
    public String modifiedTime;
    public OnDemandPageVideoProject withModifiedTime(String modifiedTime) {
        this.modifiedTime = modifiedTime;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public OnDemandPageVideoProject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public OnDemandPageVideoProject withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoProject withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("user")
    public User user;
    public OnDemandPageVideoProject withUser(User user) {
        this.user = user;
        return this;
    }
}