package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataInteractionsReport
 * Information regarding where and how to report a user.
**/
public class VideoUserMetadataInteractionsReport {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataInteractionsReport withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("reason")
    public String[] reason;
    public VideoUserMetadataInteractionsReport withReason(String[] reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataInteractionsReport withUri(String uri) {
        this.uri = uri;
        return this;
    }
}