package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataInteractionsReport
 * Information regarding where and how to report a user.
**/
public class OnDemandPageUserMetadataInteractionsReport {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataInteractionsReport withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("reason")
    public String[] reason;
    public OnDemandPageUserMetadataInteractionsReport withReason(String[] reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataInteractionsReport withUri(String uri) {
        this.uri = uri;
        return this;
    }
}