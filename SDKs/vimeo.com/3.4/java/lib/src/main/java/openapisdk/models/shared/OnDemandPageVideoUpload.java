package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDemandPageVideoUpload
 * The upload information for this video.
**/
public class OnDemandPageVideoUpload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approach")
    public OnDemandPageVideoUploadApproachEnum approach;
    public OnDemandPageVideoUpload withApproach(OnDemandPageVideoUploadApproachEnum approach) {
        this.approach = approach;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complete_uri")
    public String completeUri;
    public OnDemandPageVideoUpload withCompleteUri(String completeUri) {
        this.completeUri = completeUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form")
    public String form;
    public OnDemandPageVideoUpload withForm(String form) {
        this.form = form;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public OnDemandPageVideoUpload withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_url")
    public String redirectUrl;
    public OnDemandPageVideoUpload withRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Double size;
    public OnDemandPageVideoUpload withSize(Double size) {
        this.size = size;
        return this;
    }
    @JsonProperty("status")
    public OnDemandPageVideoUploadStatusEnum status;
    public OnDemandPageVideoUpload withStatus(OnDemandPageVideoUploadStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upload_link")
    public String uploadLink;
    public OnDemandPageVideoUpload withUploadLink(String uploadLink) {
        this.uploadLink = uploadLink;
        return this;
    }
}