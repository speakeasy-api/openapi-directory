package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoVersionsUser
 * The owner of the video version.
**/
public class VideoVersionsUser {
    @JsonProperty("account")
    public VideoVersionsUserAccountEnum account;
    public VideoVersionsUser withAccount(VideoVersionsUserAccountEnum account) {
        this.account = account;
        return this;
    }
    @JsonProperty("bio")
    public String bio;
    public VideoVersionsUser withBio(String bio) {
        this.bio = bio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_filter")
    public String[] contentFilter;
    public VideoVersionsUser withContentFilter(String[] contentFilter) {
        this.contentFilter = contentFilter;
        return this;
    }
    @JsonProperty("created_time")
    public String createdTime;
    public VideoVersionsUser withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public VideoVersionsUser withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public VideoVersionsUser withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("location")
    public String location;
    public VideoVersionsUser withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("metadata")
    public VideoVersionsUserMetadata metadata;
    public VideoVersionsUser withMetadata(VideoVersionsUserMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public VideoVersionsUser withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("pictures")
    public Picture pictures;
    public VideoVersionsUser withPictures(Picture pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferences")
    public VideoVersionsUserPreferences preferences;
    public VideoVersionsUser withPreferences(VideoVersionsUserPreferences preferences) {
        this.preferences = preferences;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public VideoVersionsUser withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("upload_quota")
    public VideoVersionsUserUploadQuota uploadQuota;
    public VideoVersionsUser withUploadQuota(VideoVersionsUserUploadQuota uploadQuota) {
        this.uploadQuota = uploadQuota;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUser withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("websites")
    public VideoVersionsUserWebsites[] websites;
    public VideoVersionsUser withWebsites(VideoVersionsUserWebsites[] websites) {
        this.websites = websites;
        return this;
    }
}