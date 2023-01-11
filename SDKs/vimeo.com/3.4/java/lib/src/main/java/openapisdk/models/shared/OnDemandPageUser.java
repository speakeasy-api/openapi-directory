package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDemandPageUser
 * The user who created this On Demand page.
**/
public class OnDemandPageUser {
    @JsonProperty("account")
    public OnDemandPageUserAccountEnum account;
    public OnDemandPageUser withAccount(OnDemandPageUserAccountEnum account) {
        this.account = account;
        return this;
    }
    @JsonProperty("bio")
    public String bio;
    public OnDemandPageUser withBio(String bio) {
        this.bio = bio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_filter")
    public String[] contentFilter;
    public OnDemandPageUser withContentFilter(String[] contentFilter) {
        this.contentFilter = contentFilter;
        return this;
    }
    @JsonProperty("created_time")
    public String createdTime;
    public OnDemandPageUser withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public OnDemandPageUser withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public OnDemandPageUser withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("location")
    public String location;
    public OnDemandPageUser withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("metadata")
    public OnDemandPageUserMetadata metadata;
    public OnDemandPageUser withMetadata(OnDemandPageUserMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public OnDemandPageUser withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("pictures")
    public Picture pictures;
    public OnDemandPageUser withPictures(Picture pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferences")
    public OnDemandPageUserPreferences preferences;
    public OnDemandPageUser withPreferences(OnDemandPageUserPreferences preferences) {
        this.preferences = preferences;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public OnDemandPageUser withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("upload_quota")
    public OnDemandPageUserUploadQuota uploadQuota;
    public OnDemandPageUser withUploadQuota(OnDemandPageUserUploadQuota uploadQuota) {
        this.uploadQuota = uploadQuota;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUser withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("websites")
    public OnDemandPageUserWebsites[] websites;
    public OnDemandPageUser withWebsites(OnDemandPageUserWebsites[] websites) {
        this.websites = websites;
        return this;
    }
}