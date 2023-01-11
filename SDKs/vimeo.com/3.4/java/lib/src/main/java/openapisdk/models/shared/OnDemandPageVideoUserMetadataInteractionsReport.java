package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoUserMetadataInteractionsReport
 * Information regarding where and how to report a user.
**/
public class OnDemandPageVideoUserMetadataInteractionsReport {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoUserMetadataInteractionsReport withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("reason")
    public String[] reason;
    public OnDemandPageVideoUserMetadataInteractionsReport withReason(String[] reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoUserMetadataInteractionsReport withUri(String uri) {
        this.uri = uri;
        return this;
    }
}