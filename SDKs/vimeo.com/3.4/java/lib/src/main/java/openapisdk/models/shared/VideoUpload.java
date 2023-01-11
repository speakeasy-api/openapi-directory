package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoUpload
 * The upload information for this video.
**/
public class VideoUpload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approach")
    public VideoUploadApproachEnum approach;
    public VideoUpload withApproach(VideoUploadApproachEnum approach) {
        this.approach = approach;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complete_uri")
    public String completeUri;
    public VideoUpload withCompleteUri(String completeUri) {
        this.completeUri = completeUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form")
    public String form;
    public VideoUpload withForm(String form) {
        this.form = form;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public VideoUpload withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_url")
    public String redirectUrl;
    public VideoUpload withRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Double size;
    public VideoUpload withSize(Double size) {
        this.size = size;
        return this;
    }
    @JsonProperty("status")
    public VideoUploadStatusEnum status;
    public VideoUpload withStatus(VideoUploadStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upload_link")
    public String uploadLink;
    public VideoUpload withUploadLink(String uploadLink) {
        this.uploadLink = uploadLink;
        return this;
    }
}