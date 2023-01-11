package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PresetsUser
 * The owner of the preset.
**/
public class PresetsUser {
    @JsonProperty("account")
    public PresetsUserAccountEnum account;
    public PresetsUser withAccount(PresetsUserAccountEnum account) {
        this.account = account;
        return this;
    }
    @JsonProperty("bio")
    public String bio;
    public PresetsUser withBio(String bio) {
        this.bio = bio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_filter")
    public String[] contentFilter;
    public PresetsUser withContentFilter(String[] contentFilter) {
        this.contentFilter = contentFilter;
        return this;
    }
    @JsonProperty("created_time")
    public String createdTime;
    public PresetsUser withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PresetsUser withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public PresetsUser withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("location")
    public String location;
    public PresetsUser withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("metadata")
    public PresetsUserMetadata metadata;
    public PresetsUser withMetadata(PresetsUserMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PresetsUser withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("pictures")
    public Picture pictures;
    public PresetsUser withPictures(Picture pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferences")
    public PresetsUserPreferences preferences;
    public PresetsUser withPreferences(PresetsUserPreferences preferences) {
        this.preferences = preferences;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public PresetsUser withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("upload_quota")
    public PresetsUserUploadQuota uploadQuota;
    public PresetsUser withUploadQuota(PresetsUserUploadQuota uploadQuota) {
        this.uploadQuota = uploadQuota;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUser withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("websites")
    public PresetsUserWebsites[] websites;
    public PresetsUser withWebsites(PresetsUserWebsites[] websites) {
        this.websites = websites;
        return this;
    }
}