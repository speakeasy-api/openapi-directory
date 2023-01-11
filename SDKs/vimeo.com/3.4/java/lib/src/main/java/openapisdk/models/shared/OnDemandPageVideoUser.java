package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDemandPageVideoUser
 * The video owner.
**/
public class OnDemandPageVideoUser {
    @JsonProperty("account")
    public OnDemandPageVideoUserAccountEnum account;
    public OnDemandPageVideoUser withAccount(OnDemandPageVideoUserAccountEnum account) {
        this.account = account;
        return this;
    }
    @JsonProperty("bio")
    public String bio;
    public OnDemandPageVideoUser withBio(String bio) {
        this.bio = bio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_filter")
    public String[] contentFilter;
    public OnDemandPageVideoUser withContentFilter(String[] contentFilter) {
        this.contentFilter = contentFilter;
        return this;
    }
    @JsonProperty("created_time")
    public String createdTime;
    public OnDemandPageVideoUser withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public OnDemandPageVideoUser withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public OnDemandPageVideoUser withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("location")
    public String location;
    public OnDemandPageVideoUser withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("metadata")
    public OnDemandPageVideoUserMetadata metadata;
    public OnDemandPageVideoUser withMetadata(OnDemandPageVideoUserMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public OnDemandPageVideoUser withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("pictures")
    public Picture pictures;
    public OnDemandPageVideoUser withPictures(Picture pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferences")
    public OnDemandPageVideoUserPreferences preferences;
    public OnDemandPageVideoUser withPreferences(OnDemandPageVideoUserPreferences preferences) {
        this.preferences = preferences;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public OnDemandPageVideoUser withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("upload_quota")
    public OnDemandPageVideoUserUploadQuota uploadQuota;
    public OnDemandPageVideoUser withUploadQuota(OnDemandPageVideoUserUploadQuota uploadQuota) {
        this.uploadQuota = uploadQuota;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoUser withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("websites")
    public OnDemandPageVideoUserWebsites[] websites;
    public OnDemandPageVideoUser withWebsites(OnDemandPageVideoUserWebsites[] websites) {
        this.websites = websites;
        return this;
    }
}