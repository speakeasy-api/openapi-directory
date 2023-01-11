package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Video {
    @JsonProperty("categories")
    public Category[] categories;
    public Video withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("content_rating")
    public String[] contentRating;
    public Video withContentRating(String[] contentRating) {
        this.contentRating = contentRating;
        return this;
    }
    @JsonProperty("context")
    public VideoContext context;
    public Video withContext(VideoContext context) {
        this.context = context;
        return this;
    }
    @JsonProperty("created_time")
    public String createdTime;
    public Video withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public Video withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("duration")
    public Double duration;
    public Video withDuration(Double duration) {
        this.duration = duration;
        return this;
    }
    @JsonProperty("embed")
    public EmbedSettings embed;
    public Video withEmbed(EmbedSettings embed) {
        this.embed = embed;
        return this;
    }
    @JsonProperty("height")
    public Double height;
    public Video withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonProperty("language")
    public String language;
    public Video withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_user_action_event_date")
    public String lastUserActionEventDate;
    public Video withLastUserActionEventDate(String lastUserActionEventDate) {
        this.lastUserActionEventDate = lastUserActionEventDate;
        return this;
    }
    @JsonProperty("license")
    public VideoLicenseEnum license;
    public Video withLicense(VideoLicenseEnum license) {
        this.license = license;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public Video withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("metadata")
    public VideoMetadata metadata;
    public Video withMetadata(VideoMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("modified_time")
    public String modifiedTime;
    public Video withModifiedTime(String modifiedTime) {
        this.modifiedTime = modifiedTime;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Video withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_folder")
    public VideoProject parentFolder;
    public Video withParentFolder(VideoProject parentFolder) {
        this.parentFolder = parentFolder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public Video withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("pictures")
    public Picture pictures;
    public Video withPictures(Picture pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("privacy")
    public VideoPrivacy privacy;
    public Video withPrivacy(VideoPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonProperty("release_time")
    public String releaseTime;
    public Video withReleaseTime(String releaseTime) {
        this.releaseTime = releaseTime;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public Video withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("spatial")
    public VideoSpatial spatial;
    public Video withSpatial(VideoSpatial spatial) {
        this.spatial = spatial;
        return this;
    }
    @JsonProperty("stats")
    public VideoStats stats;
    public Video withStats(VideoStats stats) {
        this.stats = stats;
        return this;
    }
    @JsonProperty("status")
    public VideoStatusEnum status;
    public Video withStatus(VideoStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("tags")
    public Tag[] tags;
    public Video withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("transcode")
    public VideoTranscode transcode;
    public Video withTranscode(VideoTranscode transcode) {
        this.transcode = transcode;
        return this;
    }
    @JsonProperty("upload")
    public VideoUpload upload;
    public Video withUpload(VideoUpload upload) {
        this.upload = upload;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public Video withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("user")
    public VideoUser user;
    public Video withUser(VideoUser user) {
        this.user = user;
        return this;
    }
    @JsonProperty("width")
    public Double width;
    public Video withWidth(Double width) {
        this.width = width;
        return this;
    }
}