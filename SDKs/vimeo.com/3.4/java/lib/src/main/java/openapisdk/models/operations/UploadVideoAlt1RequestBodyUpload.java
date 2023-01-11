package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoAlt1RequestBodyUpload {
    @JsonProperty("approach")
    public UploadVideoAlt1RequestBodyUploadApproachEnum approach;
    public UploadVideoAlt1RequestBodyUpload withApproach(UploadVideoAlt1RequestBodyUploadApproachEnum approach) {
        this.approach = approach;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public UploadVideoAlt1RequestBodyUpload withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_url")
    public String redirectUrl;
    public UploadVideoAlt1RequestBodyUpload withRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public UploadVideoAlt1RequestBodyUpload withSize(String size) {
        this.size = size;
        return this;
    }
}