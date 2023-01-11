package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataInteractionsReport
 * Information about where and how to report a video.
**/
public class VideoMetadataInteractionsReport {
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataInteractionsReport withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("reason")
    public String[] reason;
    public VideoMetadataInteractionsReport withReason(String[] reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataInteractionsReport withUri(String uri) {
        this.uri = uri;
        return this;
    }
}