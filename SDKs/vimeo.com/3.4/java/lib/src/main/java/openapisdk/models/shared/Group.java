package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Group {
    @JsonProperty("created_time")
    public String createdTime;
    public Group withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public Group withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public Group withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("metadata")
    public GroupMetadata metadata;
    public Group withMetadata(GroupMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("modified_time")
    public String modifiedTime;
    public Group withModifiedTime(String modifiedTime) {
        this.modifiedTime = modifiedTime;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Group withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("pictures")
    public Picture pictures;
    public Group withPictures(Picture pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("privacy")
    public GroupPrivacy privacy;
    public Group withPrivacy(GroupPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public Group withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public Group withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public GroupUser user;
    public Group withUser(GroupUser user) {
        this.user = user;
        return this;
    }
}