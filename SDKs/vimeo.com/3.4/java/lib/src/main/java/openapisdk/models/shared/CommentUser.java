package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentUser
 * The user who posted the comment.
**/
public class CommentUser {
    @JsonProperty("account")
    public CommentUserAccountEnum account;
    public CommentUser withAccount(CommentUserAccountEnum account) {
        this.account = account;
        return this;
    }
    @JsonProperty("bio")
    public String bio;
    public CommentUser withBio(String bio) {
        this.bio = bio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_filter")
    public String[] contentFilter;
    public CommentUser withContentFilter(String[] contentFilter) {
        this.contentFilter = contentFilter;
        return this;
    }
    @JsonProperty("created_time")
    public String createdTime;
    public CommentUser withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public CommentUser withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public CommentUser withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("location")
    public String location;
    public CommentUser withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("metadata")
    public CommentUserMetadata metadata;
    public CommentUser withMetadata(CommentUserMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CommentUser withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("pictures")
    public Picture pictures;
    public CommentUser withPictures(Picture pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferences")
    public CommentUserPreferences preferences;
    public CommentUser withPreferences(CommentUserPreferences preferences) {
        this.preferences = preferences;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public CommentUser withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("upload_quota")
    public CommentUserUploadQuota uploadQuota;
    public CommentUser withUploadQuota(CommentUserUploadQuota uploadQuota) {
        this.uploadQuota = uploadQuota;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUser withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("websites")
    public CommentUserWebsites[] websites;
    public CommentUser withWebsites(CommentUserWebsites[] websites) {
        this.websites = websites;
        return this;
    }
}