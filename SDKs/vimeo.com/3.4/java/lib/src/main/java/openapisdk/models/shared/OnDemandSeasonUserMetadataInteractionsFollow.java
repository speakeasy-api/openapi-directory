package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataInteractionsFollow
 * Information related to the followed status of this user.
**/
public class OnDemandSeasonUserMetadataInteractionsFollow {
    @JsonProperty("added")
    public Boolean added;
    public OnDemandSeasonUserMetadataInteractionsFollow withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataInteractionsFollow withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataInteractionsFollow withUri(String uri) {
        this.uri = uri;
        return this;
    }
}