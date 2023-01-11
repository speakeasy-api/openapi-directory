package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataInteractionsBlock
 * Information related to the block status of this user.
**/
public class OnDemandSeasonUserMetadataInteractionsBlock {
    @JsonProperty("added")
    public Boolean added;
    public OnDemandSeasonUserMetadataInteractionsBlock withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public OnDemandSeasonUserMetadataInteractionsBlock withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataInteractionsBlock withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataInteractionsBlock withUri(String uri) {
        this.uri = uri;
        return this;
    }
}