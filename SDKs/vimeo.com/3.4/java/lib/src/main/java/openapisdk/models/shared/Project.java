package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Project {
    @JsonProperty("created_time")
    public String createdTime;
    public Project withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonProperty("metadata")
    public ProjectMetadata metadata;
    public Project withMetadata(ProjectMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("modified_time")
    public String modifiedTime;
    public Project withModifiedTime(String modifiedTime) {
        this.modifiedTime = modifiedTime;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Project withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public Project withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public Project withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("user")
    public User user;
    public Project withUser(User user) {
        this.user = user;
        return this;
    }
}