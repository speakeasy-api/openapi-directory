package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataInteractionsReport
 * Information regarding where and how to report a user.
**/
public class GroupUserMetadataInteractionsReport {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataInteractionsReport withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("reason")
    public String[] reason;
    public GroupUserMetadataInteractionsReport withReason(String[] reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataInteractionsReport withUri(String uri) {
        this.uri = uri;
        return this;
    }
}