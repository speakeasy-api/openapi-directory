package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoRequestBodyUpload {
    @JsonProperty("approach")
    public UploadVideoRequestBodyUploadApproachEnum approach;
    public UploadVideoRequestBodyUpload withApproach(UploadVideoRequestBodyUploadApproachEnum approach) {
        this.approach = approach;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public UploadVideoRequestBodyUpload withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_url")
    public String redirectUrl;
    public UploadVideoRequestBodyUpload withRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public UploadVideoRequestBodyUpload withSize(String size) {
        this.size = size;
        return this;
    }
}