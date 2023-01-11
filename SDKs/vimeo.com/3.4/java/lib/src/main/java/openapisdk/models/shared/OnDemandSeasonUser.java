package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDemandSeasonUser
 * The creator of this On Demand page.
**/
public class OnDemandSeasonUser {
    @JsonProperty("account")
    public OnDemandSeasonUserAccountEnum account;
    public OnDemandSeasonUser withAccount(OnDemandSeasonUserAccountEnum account) {
        this.account = account;
        return this;
    }
    @JsonProperty("bio")
    public String bio;
    public OnDemandSeasonUser withBio(String bio) {
        this.bio = bio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_filter")
    public String[] contentFilter;
    public OnDemandSeasonUser withContentFilter(String[] contentFilter) {
        this.contentFilter = contentFilter;
        return this;
    }
    @JsonProperty("created_time")
    public String createdTime;
    public OnDemandSeasonUser withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public OnDemandSeasonUser withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public OnDemandSeasonUser withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("location")
    public String location;
    public OnDemandSeasonUser withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("metadata")
    public OnDemandSeasonUserMetadata metadata;
    public OnDemandSeasonUser withMetadata(OnDemandSeasonUserMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public OnDemandSeasonUser withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("pictures")
    public Picture pictures;
    public OnDemandSeasonUser withPictures(Picture pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferences")
    public OnDemandSeasonUserPreferences preferences;
    public OnDemandSeasonUser withPreferences(OnDemandSeasonUserPreferences preferences) {
        this.preferences = preferences;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public OnDemandSeasonUser withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("upload_quota")
    public OnDemandSeasonUserUploadQuota uploadQuota;
    public OnDemandSeasonUser withUploadQuota(OnDemandSeasonUserUploadQuota uploadQuota) {
        this.uploadQuota = uploadQuota;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUser withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("websites")
    public OnDemandSeasonUserWebsites[] websites;
    public OnDemandSeasonUser withWebsites(OnDemandSeasonUserWebsites[] websites) {
        this.websites = websites;
        return this;
    }
}