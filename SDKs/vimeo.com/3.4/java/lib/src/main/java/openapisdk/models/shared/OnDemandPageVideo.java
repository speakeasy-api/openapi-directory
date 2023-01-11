package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDemandPageVideo
 * The trailer for this On Demand page.
**/
public class OnDemandPageVideo {
    @JsonProperty("categories")
    public Category[] categories;
    public OnDemandPageVideo withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("content_rating")
    public String[] contentRating;
    public OnDemandPageVideo withContentRating(String[] contentRating) {
        this.contentRating = contentRating;
        return this;
    }
    @JsonProperty("context")
    public OnDemandPageVideoContext context;
    public OnDemandPageVideo withContext(OnDemandPageVideoContext context) {
        this.context = context;
        return this;
    }
    @JsonProperty("created_time")
    public String createdTime;
    public OnDemandPageVideo withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public OnDemandPageVideo withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("duration")
    public Double duration;
    public OnDemandPageVideo withDuration(Double duration) {
        this.duration = duration;
        return this;
    }
    @JsonProperty("embed")
    public EmbedSettings embed;
    public OnDemandPageVideo withEmbed(EmbedSettings embed) {
        this.embed = embed;
        return this;
    }
    @JsonProperty("height")
    public Double height;
    public OnDemandPageVideo withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonProperty("language")
    public String language;
    public OnDemandPageVideo withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_user_action_event_date")
    public String lastUserActionEventDate;
    public OnDemandPageVideo withLastUserActionEventDate(String lastUserActionEventDate) {
        this.lastUserActionEventDate = lastUserActionEventDate;
        return this;
    }
    @JsonProperty("license")
    public OnDemandPageVideoLicenseEnum license;
    public OnDemandPageVideo withLicense(OnDemandPageVideoLicenseEnum license) {
        this.license = license;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public OnDemandPageVideo withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("metadata")
    public OnDemandPageVideoMetadata metadata;
    public OnDemandPageVideo withMetadata(OnDemandPageVideoMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("modified_time")
    public String modifiedTime;
    public OnDemandPageVideo withModifiedTime(String modifiedTime) {
        this.modifiedTime = modifiedTime;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public OnDemandPageVideo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_folder")
    public OnDemandPageVideoProject parentFolder;
    public OnDemandPageVideo withParentFolder(OnDemandPageVideoProject parentFolder) {
        this.parentFolder = parentFolder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public OnDemandPageVideo withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("pictures")
    public Picture pictures;
    public OnDemandPageVideo withPictures(Picture pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("privacy")
    public OnDemandPageVideoPrivacy privacy;
    public OnDemandPageVideo withPrivacy(OnDemandPageVideoPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonProperty("release_time")
    public String releaseTime;
    public OnDemandPageVideo withReleaseTime(String releaseTime) {
        this.releaseTime = releaseTime;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public OnDemandPageVideo withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("spatial")
    public OnDemandPageVideoSpatial spatial;
    public OnDemandPageVideo withSpatial(OnDemandPageVideoSpatial spatial) {
        this.spatial = spatial;
        return this;
    }
    @JsonProperty("stats")
    public OnDemandPageVideoStats stats;
    public OnDemandPageVideo withStats(OnDemandPageVideoStats stats) {
        this.stats = stats;
        return this;
    }
    @JsonProperty("status")
    public OnDemandPageVideoStatusEnum status;
    public OnDemandPageVideo withStatus(OnDemandPageVideoStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("tags")
    public Tag[] tags;
    public OnDemandPageVideo withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("transcode")
    public OnDemandPageVideoTranscode transcode;
    public OnDemandPageVideo withTranscode(OnDemandPageVideoTranscode transcode) {
        this.transcode = transcode;
        return this;
    }
    @JsonProperty("upload")
    public OnDemandPageVideoUpload upload;
    public OnDemandPageVideo withUpload(OnDemandPageVideoUpload upload) {
        this.upload = upload;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideo withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("user")
    public OnDemandPageVideoUser user;
    public OnDemandPageVideo withUser(OnDemandPageVideoUser user) {
        this.user = user;
        return this;
    }
    @JsonProperty("width")
    public Double width;
    public OnDemandPageVideo withWidth(Double width) {
        this.width = width;
        return this;
    }
}