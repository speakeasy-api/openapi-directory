package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoVersionsUpload
 * The upload information for this version.
**/
public class VideoVersionsUpload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approach")
    public VideoVersionsUploadApproachEnum approach;
    public VideoVersionsUpload withApproach(VideoVersionsUploadApproachEnum approach) {
        this.approach = approach;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complete_uri")
    public String completeUri;
    public VideoVersionsUpload withCompleteUri(String completeUri) {
        this.completeUri = completeUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form")
    public String form;
    public VideoVersionsUpload withForm(String form) {
        this.form = form;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public VideoVersionsUpload withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_url")
    public String redirectUrl;
    public VideoVersionsUpload withRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Double size;
    public VideoVersionsUpload withSize(Double size) {
        this.size = size;
        return this;
    }
    @JsonProperty("status")
    public VideoVersionsUploadStatusEnum status;
    public VideoVersionsUpload withStatus(VideoVersionsUploadStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upload_link")
    public String uploadLink;
    public VideoVersionsUpload withUploadLink(String uploadLink) {
        this.uploadLink = uploadLink;
        return this;
    }
}