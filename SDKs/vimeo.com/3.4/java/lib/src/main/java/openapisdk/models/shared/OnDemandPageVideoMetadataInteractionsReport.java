package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataInteractionsReport
 * Information about where and how to report a video.
**/
public class OnDemandPageVideoMetadataInteractionsReport {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataInteractionsReport withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("reason")
    public String[] reason;
    public OnDemandPageVideoMetadataInteractionsReport withReason(String[] reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataInteractionsReport withUri(String uri) {
        this.uri = uri;
        return this;
    }
}