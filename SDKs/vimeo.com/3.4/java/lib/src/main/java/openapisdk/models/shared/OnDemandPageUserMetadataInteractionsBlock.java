package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataInteractionsBlock
 * Information related to the block status of this user.
**/
public class OnDemandPageUserMetadataInteractionsBlock {
    @JsonProperty("added")
    public Boolean added;
    public OnDemandPageUserMetadataInteractionsBlock withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public OnDemandPageUserMetadataInteractionsBlock withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataInteractionsBlock withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataInteractionsBlock withUri(String uri) {
        this.uri = uri;
        return this;
    }
}