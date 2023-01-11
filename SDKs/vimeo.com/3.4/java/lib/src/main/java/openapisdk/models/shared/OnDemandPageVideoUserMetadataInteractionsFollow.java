package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoUserMetadataInteractionsFollow
 * Information related to the followed status of this user.
**/
public class OnDemandPageVideoUserMetadataInteractionsFollow {
    @JsonProperty("added")
    public Boolean added;
    public OnDemandPageVideoUserMetadataInteractionsFollow withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoUserMetadataInteractionsFollow withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoUserMetadataInteractionsFollow withUri(String uri) {
        this.uri = uri;
        return this;
    }
}