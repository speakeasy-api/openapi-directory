package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataInteractionsReport
 * Information regarding where and how to report a user.
**/
public class OnDemandSeasonUserMetadataInteractionsReport {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataInteractionsReport withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("reason")
    public String[] reason;
    public OnDemandSeasonUserMetadataInteractionsReport withReason(String[] reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataInteractionsReport withUri(String uri) {
        this.uri = uri;
        return this;
    }
}