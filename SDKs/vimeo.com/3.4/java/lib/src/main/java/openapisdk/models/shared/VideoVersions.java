package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VideoVersions {
    @JsonProperty("active")
    public Boolean active;
    public VideoVersions withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("app")
    public ApiApp app;
    public VideoVersions withApp(ApiApp app) {
        this.app = app;
        return this;
    }
    @JsonProperty("created_time")
    public String createdTime;
    public VideoVersions withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonProperty("duration")
    public Double duration;
    public VideoVersions withDuration(Double duration) {
        this.duration = duration;
        return this;
    }
    @JsonProperty("filename")
    public String filename;
    public VideoVersions withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonProperty("filesize")
    public Double filesize;
    public VideoVersions withFilesize(Double filesize) {
        this.filesize = filesize;
        return this;
    }
    @JsonProperty("metadata")
    public VideoVersionsMetadata metadata;
    public VideoVersions withMetadata(VideoVersionsMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("modified_time")
    public String modifiedTime;
    public VideoVersions withModifiedTime(String modifiedTime) {
        this.modifiedTime = modifiedTime;
        return this;
    }
    @JsonProperty("play")
    public Play play;
    public VideoVersions withPlay(Play play) {
        this.play = play;
        return this;
    }
    @JsonProperty("upload")
    public VideoVersionsUpload upload;
    public VideoVersions withUpload(VideoVersionsUpload upload) {
        this.upload = upload;
        return this;
    }
    @JsonProperty("upload_date")
    public String uploadDate;
    public VideoVersions withUploadDate(String uploadDate) {
        this.uploadDate = uploadDate;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersions withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("user")
    public VideoVersionsUser user;
    public VideoVersions withUser(VideoVersionsUser user) {
        this.user = user;
        return this;
    }
}