package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataInteractionsReport
 * Information regarding where and how to report a user.
**/
public class PresetsUserMetadataInteractionsReport {
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataInteractionsReport withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("reason")
    public String[] reason;
    public PresetsUserMetadataInteractionsReport withReason(String[] reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataInteractionsReport withUri(String uri) {
        this.uri = uri;
        return this;
    }
}