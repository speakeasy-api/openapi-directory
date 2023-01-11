package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataInteractionsFollow
 * Information related to the followed status of this user.
**/
public class OnDemandPageUserMetadataInteractionsFollow {
    @JsonProperty("added")
    public Boolean added;
    public OnDemandPageUserMetadataInteractionsFollow withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataInteractionsFollow withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataInteractionsFollow withUri(String uri) {
        this.uri = uri;
        return this;
    }
}