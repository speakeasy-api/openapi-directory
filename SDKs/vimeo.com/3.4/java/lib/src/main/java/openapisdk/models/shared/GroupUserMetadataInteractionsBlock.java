package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataInteractionsBlock
 * Information related to the block status of this user.
**/
public class GroupUserMetadataInteractionsBlock {
    @JsonProperty("added")
    public Boolean added;
    public GroupUserMetadataInteractionsBlock withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public GroupUserMetadataInteractionsBlock withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataInteractionsBlock withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataInteractionsBlock withUri(String uri) {
        this.uri = uri;
        return this;
    }
}