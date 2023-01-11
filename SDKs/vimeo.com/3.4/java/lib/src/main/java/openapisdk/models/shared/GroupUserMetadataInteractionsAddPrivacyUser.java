package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupUserMetadataInteractionsAddPrivacyUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataInteractionsAddPrivacyUser withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataInteractionsAddPrivacyUser withUri(String uri) {
        this.uri = uri;
        return this;
    }
}