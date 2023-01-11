package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoUserMetadataInteractionsBlock
 * Information related to the block status of this user.
**/
public class OnDemandPageVideoUserMetadataInteractionsBlock {
    @JsonProperty("added")
    public Boolean added;
    public OnDemandPageVideoUserMetadataInteractionsBlock withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public OnDemandPageVideoUserMetadataInteractionsBlock withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoUserMetadataInteractionsBlock withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoUserMetadataInteractionsBlock withUri(String uri) {
        this.uri = uri;
        return this;
    }
}