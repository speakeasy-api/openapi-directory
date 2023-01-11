package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataInteractionsReport
 * Information regarding where and how to report a user.
**/
public class UserMetadataInteractionsReport {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataInteractionsReport withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("reason")
    public String[] reason;
    public UserMetadataInteractionsReport withReason(String[] reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataInteractionsReport withUri(String uri) {
        this.uri = uri;
        return this;
    }
}