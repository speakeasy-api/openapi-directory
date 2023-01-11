package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataInteractionsReport
 * Information regarding where and how to report a user.
**/
public class VideoVersionsUserMetadataInteractionsReport {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataInteractionsReport withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("reason")
    public String[] reason;
    public VideoVersionsUserMetadataInteractionsReport withReason(String[] reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataInteractionsReport withUri(String uri) {
        this.uri = uri;
        return this;
    }
}